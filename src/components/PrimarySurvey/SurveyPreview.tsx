import { useCallback } from "react"
import { Col, Container, Row } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import "./SurveyPreview.scss"


const SurveyPreview = (props: any) => {

    const answerView = (questionObj: any) => {
        console.log("questionObj: ", questionObj)
        switch (questionObj.answerType) {
            case "text":
                return <Form.Group controlId="formBasicQuestion">
                    <Form.Control type="text" placeholder="Provide your Answer" defaultValue={""} />
                </Form.Group>
                break;
            case "radio":
                if (questionObj.options.length > 0) {
                    return <Form.Group controlId="formBasicQuestion">
                        {questionObj.options.map((option: any) => {
                            return <Form.Check
                                key={`radio_${option.id}`}
                                inline
                                type={"radio"}
                                name={`for_question_${questionObj.id}`}
                                label={`${option.label}`}
                                id={`question_${questionObj.id}_radio_${option.id}`}
                            />
                        })}
                    </Form.Group>
                }
                break;
            case "checkbox":
                    if (questionObj.options.length > 0) {
                        return <Form.Group controlId="formBasicQuestion">
                            {questionObj.options.map((option: any) => {
                                return <Form.Check
                                    key={`checkbox_${option.id}`}
                                    inline
                                    type={"checkbox"}
                                    name={`for_question_${questionObj.id}`}
                                    label={`${option.label}`}
                                    id={`question_${questionObj.id}_checkbox_${option.id}`}
                                />
                            })}
                        </Form.Group>
                    }
                    break;
            case "dropdown":
                return <Form.Select aria-label="Default select example">
                    {questionObj.options.map((option: any) => {
                        return <option key={`dropdown_${option.id}`} value={option.value}>{option.label}</option>
                    })}
                </Form.Select>
            
            case "range":
                console.log(" range questionObj: ", questionObj)
                return <Form.Range min={questionObj.range[0]} defaultValue={13} max={questionObj.range[1]} step={questionObj.range[2]} />


            default:
                break;
        }
    }


    return <>
        <Container className="bg-light survey-preview pt-4 pb-4">
            {
                props.questions.map((questionObj: any, index: number) => {
                    if(questionObj.questionText !== "") {
                        return <div key={index} className="question-preview-block">
                            <Row>
                                <Col>
                                    <div className="question-block">
                                        {questionObj.questionText}
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <div className="answer-block mt-2">
                                        {answerView(questionObj)}
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    }
                })
            }
        </Container>
    </>

}

export default SurveyPreview;