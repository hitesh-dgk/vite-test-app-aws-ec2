import { useState } from "react"
import ListGroup from 'react-bootstrap/ListGroup';
import CategoryList from './CategoryList';
import { Container } from 'react-bootstrap';
import UpdateCategory from "../UpdateCategory";

function CategoryListing(props: any) {

    const [showUopdateCategoryModel, setShowUpdateCategoryModal] = useState(false)
    const [categroyToUpdate, setCategoryToUpdate] = useState(null)

    const openUpdateCategoryModel = (category: any) => {
        setShowUpdateCategoryModal(true)
        setCategoryToUpdate(category)
        console.log("categroy: ", category)
    }

    const closeUpdateCategoryModel = () => {
        console.log("triggerRefetchData triggered")
        props.triggerRefetchData()
        setShowUpdateCategoryModal(false)
    }

    return (
        <>
            <ListGroup >
                {props.categories.map((category: any, index: number) => {
                    return <CategoryList category={category} key={index} onOpenModal={openUpdateCategoryModel} />
                })}

            </ListGroup>
            <UpdateCategory show={showUopdateCategoryModel} category={categroyToUpdate} onClose={closeUpdateCategoryModel}/>
        </>

    );
}

export default CategoryListing;