import { useState, useEffect } from "react"
import { Col, Container, Row } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./SurveyForm.scss"
import { XSquareFill } from "react-bootstrap-icons"

const answerTypes: any = [
    {"label": "Text", "value": "text", "minDuration": "60"},
    {"label": "Radio", "value": "radio", "minDuration": "60"},
    {"label": "Checkbox", "value": "checkbox", "minDuration": "60"},
    {"label": "Dropdown", "value": "dropdown", "minDuration": "60"},
    {"label": "Range", "value": "range", "minDuration": "60"},
]
const SruveyForm = (props: any) => {

    const [question, setQuestion] = useState("")
    const [answerType, setAnswerType] = useState("text")
    const [options, setOptions] = useState([])
    const [range, setRange] = useState([])
    const [isCustom, setIsCustom] = useState(true)

    const [inputOption, setInputOption] = useState("")
    const [showSubmitQuestionButton, setShowSubmitQuestionButton] = useState(false)

    useEffect(() => {
        setQuestion(props.currentQuestionObject.questionText)
        setAnswerType(props.currentQuestionObject.answerType)
        setOptions(props.currentQuestionObject.options)
        setRange(props.currentQuestionObject.range)
        setIsCustom(props.currentQuestionObject.isCustom)
        setShowSubmitQuestionButton(false)
        console.log("changed")
        console.log("currentQuestionObject: ", props.currentQuestionObject)
        if(props.currentQuestionObject.questionText.length > 0) {
            console.log("inside +++++++")
            if(props.currentQuestionObject.answerType == "text") {
                setShowSubmitQuestionButton(true)
            } else {
                if(props.currentQuestionObject.answerType == 'range') {
                    if(options[0] != "" && options[1] != "" && options[2] != "") {
                        setShowSubmitQuestionButton(true)
                    }
                } else{
                    console.log("inside else block")
                    console.log(options)
                    if(options.length > 0) {
                        setShowSubmitQuestionButton(true)
                    }
                }
            }
        }
    }, [props.currentQuestionObject.questionText, props.currentQuestionObject.answerType, props.currentQuestionObject.options, props.currentQuestionObject.range])


    const onQuestionChange = (value: string) => {
        setQuestion(value)
        props.onQuestionChange(value)
    }

    const onAnswerTypeChange = (value) => {
        setAnswerType(value)
        const element: any = answerTypes.find((obj: any, index: number) => {
            if(obj.value === value) {
                return obj
            }
        })
        console.log("element: ",element)
        props.onAnswerTypeChange(value, element)
        setOptions[[]]
        props.onOptionChange([])
        if(element.value == "range") {
            setRange([1, 100, 1])
            props.onRangeChange([1, 100, 1])
        } else {
            setRange([])
            props.onRangeChange([])
        }
    }

    const onKeyEntered = (e: any) => {
        if (inputOption && e.key === "Enter") {
            console.log("onKeyEntered: ")
            // props.onOptionChange(e.target.value)
            onOptionsChangeHandler(e.target.value)
        }
    }

    const onOptionsChangeHandler = (optionValue: any) => {
        let currentOptions: any = []
        let append = true
        let optionId = options.length + 1
        if (options.length > 0) {
            currentOptions = [...options]
            let indexFound = currentOptions.findIndex((option: any) => {
                return option.value === optionValue
            })
            if (indexFound > -1) {
                append = false
            }
        }
        if (append) {
            currentOptions.push({ id: optionId, value: optionValue, label: optionValue })
            setOptions(currentOptions)
            setInputOption("")
            props.onOptionChange(currentOptions)
        }
    }


    const onRangeChange = (value: string, eleIndex: number) => {
        let currentRange: any = [...range]
        currentRange[eleIndex] = parseInt(value)
        setRange(currentRange)
        props.onRangeChange(currentRange)
        // let currectQuestions = [...questions]
        // let currentQuestionObject = currectQuestions[currentQuestionObjectIndex]
        // currentQuestionObject.range = currentRange
    }

    const onOptionDelete = (option: any) => {
        let currentOptions: any = [...options]
        let elementIndex: any = currentOptions.findIndex((opt: any, index: number) => {
            if (option.id == opt.id) {
                return index
            }
        })
        currentOptions.splice(elementIndex, 1)
        let option_id = 1;
        currentOptions.map((option: any) => {
            console.log("option_id: ", option_id)
            option.id = option_id
            option_id++;
        })

        console.log("currentOptions: ", currentOptions)

        setOptions(currentOptions)
        props.onOptionDelete(currentOptions)
    }

    return <>
        <Container className="bg-light text-dark pt-4 pb-4 text-left form-block">
            <div>
                <h3>Add New Question</h3>
                <Form.Group className="mb-3" controlId="formBasicQuestion">
                    <Form.Label>Question</Form.Label>
                    <Form.Control type="text" placeholder="Provide your Question" value={question} onChange={(e: any) => onQuestionChange(e.target.value)}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicAnswerType">
                    <Form.Label>Answer Type</Form.Label>
                    <Form.Select aria-label="Default select example" onChange={(e: any) => onAnswerTypeChange(e.target.value)}>
                        { answerTypes.map((type: any) => {
                            return <option value={type.value} selected={ answerType == type.value ? true: false }>{type.label}</option>
                        }) }
                    </Form.Select>
                </Form.Group>
                {(answerType !== "text" && answerType !== "range")&& <Form.Group className="mb-3" controlId="formBasicOptions">
                    <Form.Label>Options</Form.Label>
                    &nbsp;
                    <Form.Text className="text-muted">
                        (Enter the value and press Enter)
                    </Form.Text>
                    <Form.Control type="text" placeholder="Provide your Question"  onKeyDown={onKeyEntered} value={inputOption} onChange={(e: any) => setInputOption(e.target.value)}/>
                </Form.Group>}
                {
                    answerType === "range" && <Form.Group className="mb-3" controlId="formBasicOptions">
                    <Form.Label>Range</Form.Label>
                    &nbsp;
                    <Row>
                        <Col sm={4}>
                            <Form.Text className="text-muted">
                                Min value
                            </Form.Text>
                            <Form.Control type="number" placeholder="Min"  value={range[0]} onChange={(e: any) => onRangeChange(e.target.value, 0)}/>
                        </Col>
                        <Col sm={4}>
                            <Form.Text className="text-muted">
                                Max Value
                            </Form.Text>
                            <Form.Control type="number" placeholder="Max"  value={range[1]} onChange={(e: any) => onRangeChange(e.target.value, 1)}/>
                        </Col>
                        <Col sm={4}>
                            <Form.Text className="text-muted">
                                Stepper
                            </Form.Text>
                            <Form.Control type="number" placeholder="Max"  value={range[2]} onChange={(e: any) => onRangeChange(e.target.value, 2)}/>
                        </Col>
                    </Row>
                </Form.Group>
                }
                {options.length > 0 && <div className="d-flex justify-content-start pt-2 pb-4">
                    {
                        options.map((option: any) => {
                            return <div className="option-item" key={option.id} id={option.id}>
                                {option.label}
                                <Button onClick={() => onOptionDelete(option)}><XSquareFill /></Button>
                            </div>
                        })
                    }
                </div>}
                {showSubmitQuestionButton && <Button variant="primary" type="button" onClick={props.onAddQuestion}>
                    Submit New Question
                </Button>}
                {
                    props.editTriggered && <Button className="ms-3" onClick={props.onCloseEdit}>Close Edit</Button>
                }
            </div>
        </Container>
    </>

}

export default SruveyForm