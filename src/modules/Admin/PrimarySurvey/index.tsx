import { useState } from "react"
import { Button, Col, Container, Row } from "react-bootstrap"
import ListingPrimarySurvey from "../../../components/PrimarySurvey/ListingPrimarySurvey"
import NewPrimarySurvey from "../../../components/PrimarySurvey/NewPrimarySurvey"



const PrimarySurvey = () => {
    const [createNewSurveyTriggered, setCreateNewSurveyTriggered] = useState(false)
    return <>
        <Container>
            {!createNewSurveyTriggered && <>
                <Row>
                    <Col>
                        <div className="cta-block d-flex justify-content-end">
                            <Button onClick={() => setCreateNewSurveyTriggered(true)}>Add New Primary Survey</Button>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <ListingPrimarySurvey />
                    </Col>
                </Row>
            </>
            }
            {createNewSurveyTriggered && <>
                <Row>
                    <Col>
                        <div className="cta-block d-flex justify-content-end">
                            <Button onClick={() => setCreateNewSurveyTriggered(false)}>Back</Button>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <NewPrimarySurvey />
                    </Col>
                </Row>
            </>
            }
        </Container>
    </>
}

export default PrimarySurvey