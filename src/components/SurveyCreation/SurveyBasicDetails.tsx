import { useState, useEffect } from "react";
import { Col, Container, Row, Form, Button } from "react-bootstrap"
import { useAppSelector } from "../../store/hooks"
import { RootState } from "../../store"
import {Trash} from "react-bootstrap-icons"
import "./SurveyBasicDetails.scss"


const SurveyBasicDetails = (props: any) => {
    const { categories } = useAppSelector((state: RootState) => state.category)
    const { newSurveyCreationRequestFlag } = useAppSelector((state: RootState) => state.surveys)



    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [totalCost, setTotalCost] = useState("")
    const [noOfSurveys, setNoOfSurveys] = useState("")
    const [totalDuration, setTotalDuration] = useState("")
    const [surveyCategories, setSurveyCatategories] = useState([])
    const [isGated, setIsGated] = useState(true)


    useEffect(() => {
        setTotalDuration(props.totalDuration)
    }, [props.totalDuration])

    useEffect(() => {
        if(newSurveyCreationRequestFlag == "fulfilled") {
            setTitle("")
            setDescription("")
            setTotalCost("")
            setNoOfSurveys("")
            setSurveyCatategories([])
            setIsGated(true)
        }


    }, [newSurveyCreationRequestFlag])


    const onSurveyCategoryChangeHandler = (e: any) => {
        let currentSelectedCategories: any = [...surveyCategories]
        let selectedCategory: any = JSON.parse(e.target.value)
        let categoryExists = currentSelectedCategories.find((category: any) => {
            if (category.category_id === selectedCategory.category_id) {
                return category
            }
        })
        if (!categoryExists) {
            setSurveyCatategories([...currentSelectedCategories, selectedCategory])
            props.onSurveyCategoryChangeHandler([...currentSelectedCategories, selectedCategory])
        }
    }

    const onGatedChangeHandler = (e: any) => {
        setIsGated(!isGated)
        props.onGatedChangeHandler(!isGated)
    }
    const onTitleChangeHandler = (value: string) => {
        setTitle(value)
        props.onTitleChangeHandler(value)
    }

    const onDescriptionChangeHandler = (value: string) => {
        setDescription(value);
        props.onDescriptionChangeHandler(value)
    }
    const onTotalCostChangeHandler = (value: string) => {
        setTotalCost(value);
        props.onTotalCostChangeHandler(value)
    }
    const onNoOfSurveyChangeHandler = (value: string) => {
        setNoOfSurveys(value);
        props.onNoOfSurveyChangeHandler(value)
    }

    const onRemoveSelectedCategory = (category_id) => {

        console.log("onRemoveSelectedCategory: category_id: ", category_id)
        console.log("surveyCategories: ", surveyCategories)
        let currentSelectedCategories: any[] = [...surveyCategories]
        let categoryIndex = currentSelectedCategories.findIndex((category: any, index: number) => {
            console.log("category.category_id: ", category.category_id)
            console.log("category.category_id == category_id: ", category.category_id == category_id)
            if (category.category_id == category_id) {
                return true
            }
        })
        console.log("categoryIndex: ", categoryIndex)
        if (categoryIndex > -1) {
            currentSelectedCategories.splice(categoryIndex, 1)
            console.log("currentSelectedCategories: ", currentSelectedCategories)
            setSurveyCatategories([...currentSelectedCategories])
            props.onSurveyCategoryChangeHandler([...currentSelectedCategories])
        }

    }

    return <>
        <Container>
            <div className="survey-basic-details mt-3 mb-4">
                <h3>Basic Details</h3>
                <div className="form-block mt-3">
                    <Row>
                        <Col sm={6} md={4}>
                            <Form.Group className="mb-3" controlId="formBasicTitle">
                                <Form.Label>Survey Title</Form.Label>
                                <Form.Control value={title} onChange={(e: any) => onTitleChangeHandler(e.target.value)} type="text" placeholder="Survey Title" />
                            </Form.Group>
                        </Col>
                        <Col sm={6} md={4}>
                            <Form.Group className="mb-3" controlId="formBasicDescription">
                                <Form.Label>Survey Description</Form.Label>
                                <Form.Control value={description} onChange={(e: any) => onDescriptionChangeHandler(e.target.value)} type="text" placeholder="Survey Description" />
                            </Form.Group>
                        </Col>
                        <Col sm={6} md={4}>
                            <Form.Group className="mb-3" controlId="formBasicTotalCost">
                                <Form.Label>Total Cost (RLC)</Form.Label>
                                <Form.Control value={totalCost} onChange={(e: any) => onTotalCostChangeHandler(e.target.value)} type="text" placeholder="Total Cost" />
                            </Form.Group>
                        </Col>
                        <Col sm={6} md={4}>
                            <Form.Group className="mb-3" controlId="formBasicNoOfSurveys">
                                <Form.Label>No. Of Surveys Required { !isNaN(parseFloat(totalCost)) && !isNaN(parseFloat(noOfSurveys))  && `(${parseFloat((parseFloat(totalCost) / parseFloat(noOfSurveys)) + "").toFixed(6)} RLC per survey)` }</Form.Label>
                                <Form.Control value={noOfSurveys} onChange={(e: any) => onNoOfSurveyChangeHandler(e.target.value)} type="text" placeholder="Number of Surveys required" />
                            </Form.Group>
                        </Col>
                        <Col sm={6} md={4}>
                            <Form.Group className="mb-3" controlId="formBasicDuration">
                                <Form.Label>Total Survey Duration (sec)</Form.Label>
                                <Form.Control value={totalDuration} type="text" disabled placeholder="Number of Surveys required" />
                            </Form.Group>
                        </Col>
                        <Col sm={6} md={4}>
                            <Form.Group className="mb-3" controlId="formBasicDuration">
                                <Form.Label>Gated Survey</Form.Label>
                                <Form.Check // prettier-ignore
                                    type={"checkbox"}
                                    id={`gated-checkbox`}
                                    label={`Yes`}
                                    checked={isGated}
                                    onChange={(e) => onGatedChangeHandler(e)}
                                />
                            </Form.Group>
                        </Col>
                        <Col sm={6} md={4}>
                            <Form.Group className="mb-3" controlId="formBasicTotalCost">
                                <Form.Label>Category</Form.Label>
                                <Form.Select aria-label="Default select example" onChange={onSurveyCategoryChangeHandler}>
                                    <option key="blanck-option" value="">Select Survey Category</option>
                                    {
                                        categories.map((category: any) => {
                                            return <option key={category.nmae} value={JSON.stringify(category)}>{category.name}</option>
                                        })
                                    }
                                </Form.Select>
                            </Form.Group>
                        </Col>
                    </Row>

                    {
                        surveyCategories.length > 0 && <Row>
                            <Col>
                                <h6>Selected Categories for Survey</h6>
                                <div className="mt-2 d-flex justify-content-start">
                                    {
                                        surveyCategories.map((category: any) => {
                                            return <div className="category-tag d-flex justify-content-start align-items-center me-3 p-2">
                                                {category.name}
                                                <Button onClick={() => onRemoveSelectedCategory(category.category_id)} size="sm ms-2" variant="danger">
                                                    <Trash/>
                                                </Button>
                                            </div>
                                        })
                                    }
                                </div>
                            </Col>
                        </Row>
                    }

                </div>
            </div>
        </Container>
    </>
}

export default SurveyBasicDetails