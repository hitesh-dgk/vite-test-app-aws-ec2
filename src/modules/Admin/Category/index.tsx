import { useEffect, useState } from "react"
import { Button, Col, Container, Row } from "react-bootstrap"
import { getAllCategories } from "../../../services/category.service"
import ErrorView from "../../../components/ErrorView"
import CategoryListing from "../../../components/Category/CategroyListing"
import AddNewCategory from "../../../components/Category/AddNewCategory"
import { useAppDispatch, useAppSelector } from "../../../store/hooks"
import { fetchCategoriesAsyncThunk } from "../../../store/asyncThunk/CategoryAsyncThunk"
import { RootState } from "../../../store"



const Category = () => {

    const [errorObject, setErrorObject] = useState(null)
    const [showCategoryModel, setShowCategoryModal] = useState(false)
    const [reFetchData, setReFetchData] = useState(false)

    const { categories, updateCategoryInitiatedStatus } = useAppSelector((state: RootState) => state.category)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchCategoriesAsyncThunk(null))
    }, [showCategoryModel]) 

    useEffect(() => {
        console.log("updateCategoryInitiatedStatus: ", updateCategoryInitiatedStatus)
    }, [updateCategoryInitiatedStatus])

    useEffect(() => {
        console.log("fetched categories: ", categories)
    }, [categories]) 
    
    const openCategoryModel = () => {
        setShowCategoryModal(true)
    }

    const closeCategoryModel = () => {
        setShowCategoryModal(false)
    }

    const refetchDataHandler = () => {
        setReFetchData(true)
    }

    return <>
        <Container>
            <Row>
                <Col>
                    <div className="flex justify-content-end">
                        <Button onClick={openCategoryModel}>Add Category</Button>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col sm={12} md={6}>
                    { categories.length > 0 && <div className="pt-5 category-listing-block"><CategoryListing triggerRefetchData={refetchDataHandler} categories={categories}/></div>}
                </Col>
            </Row>
            <AddNewCategory onClose={closeCategoryModel} show={showCategoryModel} />
        </Container>
        {errorObject != null && <ErrorView error={errorObject} />}
    </>
}

export default Category