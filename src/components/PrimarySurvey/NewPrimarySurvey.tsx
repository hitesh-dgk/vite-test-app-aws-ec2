import { useState, useEffect } from "react"
import { Container, Row, Col, Button } from "react-bootstrap"
import PrimarySruveyForm from "./PrimarySruveyForm"
import "./NewPrimarySurvey.scss"
import SurveyPreview from "./SurveyPreview"
import NewSurveySubmittedQuestionView from "./NewSurveySubmittedQuestionView"
import PrimarySurveyBasicDetails from "./PrimarySurveyBasicDetails"
import { useAppDispatch, useAppSelector } from "../../store/hooks"
import { RootState } from "../../store"
import { fetchCategoriesAsyncThunk } from "../../store/asyncThunk/CategoryAsyncThunk"
import { storePrimarySurvey } from "../../services/survey.service"


const NewPrimarySurvey = () => {


    const { address } = useAppSelector((state: RootState) => state.user)

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
    const { categories } = useAppSelector((state: RootState) => state.category)
    const dispatch = useAppDispatch()

    useEffect(() => {

        if(categories.length == 0) {
            console.log("inside")
            dispatch(fetchCategoriesAsyncThunk(null))
        }
        console.log("categories: ", categories)

    }, [categories])


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
        currentQuestionObject.submitted =  true
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
        if(!editTriggered) {
            currectQuestions.push({ id: questionId, questionText: "", answerType: "text", options: [], range: [], duration: "60", submitted: false , isCustom: true})
            console.log("after submit: ", currentQuestionObjectIndex)
            setCurrentQuestionObjectIndex(currentQuestionObjectIndex+1)
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
            totalCost: isNaN(parseFloat(totalCost)) ? 0: parseFloat(totalCost),
            noOfSurveys: isNaN(parseFloat(noOfSurveys)) ? 0: parseInt(noOfSurveys),
            totalDuration: totalDuration,
            isPrimary: isPrimary,
            isGated: isGated,
            categories: surveyCategories.map((category: any) => category.category_id),
            surveyQuestions: currentQuestion,
            creator: address

        }

        console.log("requestBody")
        console.log(requestBody)
        storePrimarySurvey(requestBody)
            .then((res: any) => {
                console.log(res)
            })
            .catch((error: any) => {
                console.log(error)
            })
    }


    return <>
        <Container className="mt-4 new-primary-survey-container">
            <Row>
                <Col>
                    <PrimarySurveyBasicDetails totalDuration={totalDuration} onTitleChangeHandler={onTitleChangeHandler} onDescriptionChangeHandler={onDescriptionChangeHandler} onTotalCostChangeHandler={onTotalCostChangeHandler} onNoOfSurveyChangeHandler={onNoOfSurveyChangeHandler} onPrimaryChangeHandler={onPrimaryChangeHandler} onGatedChangeHandler={onGatedChangeHandler} onSurveyCategoryChangeHandler={onSurveyCategoryChangeHandler}/> 
                </Col>
            </Row>
            <Row>
                <Col sm={12} md={6}>
                    {/* <PrimarySruveyForm onQuestionChange={questionChangeHandler} onAnswerTypeChange={answerTypeChangeHandler} onOptionChange={onOptionsChangeHandler} onOptionDelete={onOptionDeleteHandler} onRangeChange={onRangeChangeHandler} onAddQuestion={onAddNewQuestionHandler} onCloseEdit={onCloseEditHandler} question={question} answerType={answerType} options={options} range={range} editTriggered={editTriggered} /> */}
                    <PrimarySruveyForm onIsCustomChangeHandler={onIsCustomChangeHandler} onQuestionChange={questionChangeHandler} onAnswerTypeChange={answerTypeChangeHandler} onOptionChange={onOptionsChangeHandler} onOptionDelete={onOptionDeleteHandler} onRangeChange={onRangeChangeHandler} onAddQuestion={onAddNewQuestionHandler}  currentQuestionObject={questions[currentQuestionObjectIndex]}/>
                    {questions.length > 1 && <NewSurveySubmittedQuestionView questions={questions} onEditQuestionObject={onEditQuestionObjectHandler} onDeleteQuestion={onDeleteQuestionObjectHandler}/>}
                </Col>
                <Col sm={12} md={6}>
                    {/* <SurveyPreview question={question} answerType={answerType} options={options} questionId={questionId} questions={questions} /> */}
                    <SurveyPreview questions={questions} />
                    {questions.length > 1 && <Button className="mt-3" variant="success" onClick={onSubmitSurveyHandler}>Create Survey</Button> }
                </Col>
            </Row>
        </Container>
    </>

}

export default NewPrimarySurvey