import { useState, useEffect } from "react"
import { Container, Row, Col, Button } from "react-bootstrap"
import SurveyForm from "./SurveyForm"
import "./index.scss"
import SurveyPreview from "./SurveyPreview"
import NewSurveySubmittedQuestionView from "./NewSurveySubmittedQuestionView"
import SurveyBasicDetails from "./SurveyBasicDetails"
import { useAppDispatch, useAppSelector } from "../../store/hooks"
import { RootState } from "../../store"
import { fetchCategoriesAsyncThunk } from "../../store/asyncThunk/CategoryAsyncThunk"
import Spinner from 'react-bootstrap/Spinner';
import { surveyCreationAsyncThunk } from "../../store/asyncThunk/SurveyAsyncThunk"
import { resetNewSurveyCreationRequestFlag } from "../../store/slices/surveySlice";
import Alert from 'react-bootstrap/Alert';


const SurveyCreation = () => {


    const { address } = useAppSelector((state: RootState) => state.user)
    const { categories } = useAppSelector((state: RootState) => state.category)
    const { newSurveyCreationRequestFlag } = useAppSelector((state: RootState) => state.surveys)



    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [totalCost, setTotalCost] = useState("")
    const [noOfSurveys, setNoOfSurveys] = useState("")
    const [surveyCategories, setSurveyCatategories] = useState([])
    const [isPrimary, setIsPrimary] = useState(false)
    const [isGated, setIsGated] = useState(true)

    // const [questionId, setQuestionId] = useState(1)
    // const [question, setQuestion] = useState("")
    // const [answerType, setAnswerType] = useState("text")
    // const [options, setOptions] = useState([])
    // const [range, setRange] = useState([1, 100, 1])
    const [currentQuestionObjectIndex, setCurrentQuestionObjectIndex] = useState(0)
    const [editTriggered, setEditTriggered] = useState(false)
    const [totalDuration, setTotalDuration] = useState(0);
    const [questions, setQuestions] = useState([{
        id: 1,
        questionText: "",
        answerType: "text",
        options: [],
        range: [],
        duration: "60",
        submitted: false,
        isCustom: true
    }])
    const dispatch = useAppDispatch()

    useEffect(() => {

        if (categories.length == 0) {
            console.log("inside")
            dispatch(fetchCategoriesAsyncThunk(null))
        }
        console.log("categories: ", categories)

    }, [categories])

    useEffect(() => {
        if(newSurveyCreationRequestFlag == "fulfilled") {
            console.log("reset form")
            dispatch(resetNewSurveyCreationRequestFlag(null))
            setTitle("")
            setDescription("")
            setTotalCost("")
            setNoOfSurveys("")
            setSurveyCatategories([])
            setIsGated(true)
            setCurrentQuestionObjectIndex(0)
            setEditTriggered(false)
            setTotalDuration(0)
            setQuestions([{
                id: 1,
                questionText: "",
                answerType: "text",
                options: [],
                range: [],
                duration: "60",
                submitted: false,
                isCustom: true
            }])
        }
    }, [newSurveyCreationRequestFlag])


    // useEffect(() => {
    //     console.log("currentQuestionObjectIndex useEffect")
    //     let currectQuestions = [...questions]
    //     let updatedQuestions = [...currectQuestions]
    //     let updatedQuestionObject = updatedQuestions[currentQuestionObjectIndex]
    //     console.log("updatedQuestionObject: ", updatedQuestionObject)
    //     // setQuestion(updatedQuestionObject.question)
    //     // setAnswerType(updatedQuestionObject.answerType)
    //     // setOptions(updatedQuestionObject.options)
    //     // setRange(updatedQuestionObject.range)

    // }, [currentQuestionObjectIndex])

    const onTitleChangeHandler = (value: string) => {
        setTitle(value);
    }
    const onDescriptionChangeHandler = (value: string) => {
        setDescription(value);
    }

    const onTotalCostChangeHandler = (value: string) => {
        setTotalCost(value);
    }

    const onNoOfSurveyChangeHandler = (value: string) => {
        setNoOfSurveys(value);
    }

    const onPrimaryChangeHandler = (value: boolean) => {
        setIsPrimary(value);
    }
    const onGatedChangeHandler = (value: boolean) => {
        setIsGated(value);
    }

    const onSurveyCategoryChangeHandler = (categories: any) => {
        setSurveyCatategories(categories);
    }

    const questionChangeHandler = (value) => {
        let currectQuestions = [...questions]
        console.log("currentQuestionObjectIndex: ", currentQuestionObjectIndex)
        console.log("questions: ", questions)
        let currentQuestionObject = currectQuestions[currentQuestionObjectIndex]
        currentQuestionObject.questionText = value
        currectQuestions[currentQuestionObjectIndex] = currentQuestionObject
        setQuestions(currectQuestions)
    }

    const onIsCustomChangeHandler = (value: boolean) => {
        let currectQuestions = [...questions]
        console.log("currentQuestionObjectIndex: ", currentQuestionObjectIndex)
        console.log("questions: ", questions)
        let currentQuestionObject = currectQuestions[currentQuestionObjectIndex]
        currentQuestionObject.isCustom = value
        currectQuestions[currentQuestionObjectIndex] = currentQuestionObject
        setQuestions(currectQuestions)
    }

    const answerTypeChangeHandler = (value, answerTypeObj) => {
        // setAnswerType(value)
        let currectQuestions = [...questions]
        let currentQuestionObject = currectQuestions[currentQuestionObjectIndex]
        currentQuestionObject.answerType = value
        currectQuestions[currentQuestionObjectIndex] = currentQuestionObject
        setQuestions(currectQuestions)
    }

    const onOptionsChangeHandler = (options: any) => {

        let currectQuestions = [...questions]
        let currentQuestionObject = currectQuestions[currentQuestionObjectIndex]
        currentQuestionObject.options = options
        currectQuestions[currentQuestionObjectIndex] = currentQuestionObject

        setQuestions(currectQuestions)

    }

    const onOptionDeleteHandler = (options: any) => {
        let currectQuestions = [...questions]
        let currentQuestionObject = currectQuestions[currentQuestionObjectIndex]
        currentQuestionObject.options = options
        currectQuestions[currentQuestionObjectIndex] = currentQuestionObject
        setQuestions(currectQuestions)
    }

    const onRangeChangeHandler = (currentRange: any) => {
        let currectQuestions = [...questions]
        let currentQuestionObject = currectQuestions[currentQuestionObjectIndex]
        currentQuestionObject.range = currentRange
        setQuestions(currectQuestions)

    }
    const onAddNewQuestionHandler = () => {
        let currectQuestions = [...questions]
        let currentQuestionObject = currectQuestions[currentQuestionObjectIndex]
        currentQuestionObject.submitted = true
        // currentQuestionObject.answerType = answerType
        // currentQuestionObject.options = options
        // currentQuestionObject.range = range
        currectQuestions[currentQuestionObjectIndex] = currentQuestionObject
        let currentTotalDuration = totalDuration + parseInt(currentQuestionObject.duration)
        setTotalDuration(currentTotalDuration)

        // console.log("after step1 currectQuestions: ", currectQuestions)
        let questionId = currentQuestionObject.id + 1
        setQuestions(currectQuestions)
        console.log("editTriggered: ", editTriggered)
        if (!editTriggered) {
            currectQuestions.push({ id: questionId, questionText: "", answerType: "text", options: [], range: [], duration: "60", submitted: false, isCustom: true })
            console.log("after submit: ", currentQuestionObjectIndex)
            setCurrentQuestionObjectIndex(currentQuestionObjectIndex + 1)
        } else {
            setCurrentQuestionObjectIndex(questions.length - 1)
        }
        // setQuestion("")
        // setAnswerType("text")
        // setOptions([])
        // setRange([])
    }

    const onEditQuestionObjectHandler = (questionIndex: number) => {

        let currectQuestions = [...questions]
        let currentQuestionObject = currectQuestions[questionIndex]
        // setQuestion(currentQuestionObject.question)
        // setAnswerType(currentQuestionObject.answerType)
        // setOptions(currentQuestionObject.options)
        // setRange(currentQuestionObject.range)
        setCurrentQuestionObjectIndex(questionIndex)
        setEditTriggered(true)


    }

    const onDeleteQuestionObjectHandler = (questionIndex: number) => {
        console.log("onDeleteQuestionObjectHandler currentQuestionObjectIndex: ", currentQuestionObjectIndex)
        let currectQuestions = [...questions]
        let currentQuestionObject = currectQuestions[questionIndex]
        let currentTotalDuration = totalDuration - parseInt(currentQuestionObject.duration)
        setTotalDuration(currentTotalDuration)
        currectQuestions.splice(questionIndex, 1)
        let questionId = 1
        currectQuestions.map((questionObject: any, index: number) => {
            questionObject.id = questionId
            questionId++;
        })

        console.log("delete currectQuestions")
        console.log(currectQuestions)

        setQuestions(currectQuestions)


        let nextQuestionObjectIndex: any = currentQuestionObjectIndex
        if (questionIndex < currentQuestionObjectIndex) {
            nextQuestionObjectIndex = currentQuestionObjectIndex - 1
        }
        setCurrentQuestionObjectIndex(nextQuestionObjectIndex)

    }

    const onCloseEditHandler = () => {
        setCurrentQuestionObjectIndex(questions.length - 1)
        setEditTriggered(false)
    }

    const onSubmitSurveyHandler = () => {
        let currentQuestion = [...questions]
        currentQuestion.splice(currentQuestion.length - 1, 1)

        let requestBody: any = {
            title: title,
            description: description,
            totalCost: isNaN(parseFloat(totalCost)) ? 0 : parseFloat(totalCost),
            noOfSurveys: isNaN(parseFloat(noOfSurveys)) ? 0 : parseInt(noOfSurveys),
            totalDuration: totalDuration,
            isPrimary: isPrimary,
            isGated: isGated,
            categories: surveyCategories.map((category: any) => category.category_id),
            surveyQuestions: currentQuestion,
            creator: address

        }

        console.log("requestBody")
        console.log(requestBody)
        dispatch(surveyCreationAsyncThunk(requestBody))
    }


    return <>
        <Container className="mt-4 survey-creation-container">
            <Row>
                <Col>
                    <SurveyBasicDetails totalDuration={totalDuration} onTitleChangeHandler={onTitleChangeHandler} onDescriptionChangeHandler={onDescriptionChangeHandler} onTotalCostChangeHandler={onTotalCostChangeHandler} onNoOfSurveyChangeHandler={onNoOfSurveyChangeHandler} onPrimaryChangeHandler={onPrimaryChangeHandler} onGatedChangeHandler={onGatedChangeHandler} onSurveyCategoryChangeHandler={onSurveyCategoryChangeHandler} />
                </Col>
            </Row>
        </Container>
        <Container className="mt-4 survey-creation-container">
            <Row>
                <Col sm={12} md={6}>
                    {/* <SurveyForm onQuestionChange={questionChangeHandler} onAnswerTypeChange={answerTypeChangeHandler} onOptionChange={onOptionsChangeHandler} onOptionDelete={onOptionDeleteHandler} onRangeChange={onRangeChangeHandler} onAddQuestion={onAddNewQuestionHandler} onCloseEdit={onCloseEditHandler} question={question} answerType={answerType} options={options} range={range} editTriggered={editTriggered} /> */}
                    <SurveyForm onIsCustomChangeHandler={onIsCustomChangeHandler} onQuestionChange={questionChangeHandler} onAnswerTypeChange={answerTypeChangeHandler} onOptionChange={onOptionsChangeHandler} onOptionDelete={onOptionDeleteHandler} onRangeChange={onRangeChangeHandler} onAddQuestion={onAddNewQuestionHandler} currentQuestionObject={questions[currentQuestionObjectIndex]} />
                    {questions.length > 1 && <NewSurveySubmittedQuestionView questions={questions} onEditQuestionObject={onEditQuestionObjectHandler} onDeleteQuestion={onDeleteQuestionObjectHandler} />}
                </Col>
                <Col sm={12} md={6}>
                    {/* <SurveyPreview question={question} answerType={answerType} options={options} questionId={questionId} questions={questions} /> */}
                    <SurveyPreview questions={questions} />
                    {questions.length > 1 && <Button className="mt-3" variant="success" onClick={onSubmitSurveyHandler}>
                        {
                            (newSurveyCreationRequestFlag == "" || newSurveyCreationRequestFlag == "fulfilled") && "Create Survey"
                        }
                        {
                            newSurveyCreationRequestFlag == "pending" && <>
                                <Spinner
                                    as="span"
                                    animation="grow"
                                    size="sm"
                                    role="status"
                                    aria-hidden="true"
                                />
                                &nbsp;
                                In Process...
                            </>
                        }

                    </Button>}
                </Col>
            </Row>
        </Container>
        {
            newSurveyCreationRequestFlag === "fulfilled" && <Alert key={"success"} variant={"success"} style={{ position: "absolute", right: "15px", bottom: "15px" }}>
                Survey was created successfully.
            </Alert>
        }
    </>

}

export default SurveyCreation