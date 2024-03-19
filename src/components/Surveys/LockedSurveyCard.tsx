
import Card from 'react-bootstrap/Card';
import { LockFill } from "react-bootstrap-icons"
import "./LockedSurveyCard.scss"


const LockedSurveyCard = () => {

    return <>
        <Card className="locked-survey-card" >
            <Card.Body className='locked-survey-card-body'>
                <LockFill />
            </Card.Body>
        </Card>
    </>

}

export default LockedSurveyCard;