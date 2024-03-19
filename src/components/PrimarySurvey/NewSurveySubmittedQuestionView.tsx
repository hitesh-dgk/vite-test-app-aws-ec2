import { Col, Container, Row, Button } from "react-bootstrap";
import "./NewSurveySubmittedQuestionView.scss"
import ListGroup from 'react-bootstrap/ListGroup';


const NewSurveySubmittedQuestionView = (props: any) => {
    return <>
        <Container className="bg-light">
            <div className="new-survey-submitted-question-view mt-3">
                <h3>Added Question</h3>
                <div className="questions-list">
                    <ListGroup>
                        {
                            props.questions.map((questionObject: any, index: number) => {
                                if(questionObject.submitted) {
                                    return <ListGroup.Item key={index} className="d-flex justify-content-between">
                                        <div className="text-wrap">{questionObject.questionText}</div>
                                        <div className="d-flex">
                                            <div className="me-2"><Button size="sm" variant="warning" onClick={() => props.onEditQuestionObject(index)}>Edit</Button></div>
                                            <div><Button size="sm" variant="danger" onClick={() => props.onDeleteQuestion(index)}>Delete</Button></div>
                                        </div>
                                    </ListGroup.Item>
                                }
                            })
                        }
                    </ListGroup>
                </div>
            </div>
        </Container>
    </>
}

export default NewSurveySubmittedQuestionView;