import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import PrimarySurveyListing from '../Surveys/PrimarySurveyListing';
import "./survey.scss"
import SurveyPagination from '../Surveys/SurveyPagination';
import LiveSurveyListing from '../Surveys/LiveSurveyListing';
const Survey = (props: any) => {
  console.log("surveys: ", props.surveys)
  return (
    <>
      {
        props.surveys.length > 0 && <div>
          <Container style={{ backgroundColor: "#343a40" }} fluid>
            <div className='survey-listing-block'>
              <Row xs={1} md={4} className="">
                {
                  props.surveys[0].isPrimary && <PrimarySurveyListing surveys={props.surveys} />
                }
                {
                  !props.surveys[0].isPrimary && <LiveSurveyListing surveys={props.surveys}/>
                }
              </Row>
            </div>
            <SurveyPagination/>
          </Container>
        </div>
      }
    </>

  )
}

export default Survey
