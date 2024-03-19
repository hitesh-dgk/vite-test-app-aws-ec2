import Card from "react-bootstrap/Card";
import ProgressBar from "react-bootstrap/ProgressBar";
import "./SurveyCard.scss";
import { NavLink } from "react-router-dom";

type SurveyCardProps = {
  survey: {
    survey_id: number | string;
    title: string;
    description: string;
    isPrimary: boolean;
  };
};

const SurveyCard = (props: SurveyCardProps) => {
  return (
    <>
      <NavLink
        className="survey-link"
        to={`/survey-response/${props.survey.survey_id}`}
      >
        <Card className="survey-card">
          <Card.Img variant="top" src="public/Images/img1.jpg" />
          <Card.Body className="survey-card-body">
            <Card.Title className="survey-title">
              {props.survey.title}
            </Card.Title>
            <Card.Text className="survey-content">
              {props.survey.description}
            </Card.Text>
            {!props.survey.isPrimary && (
              <ProgressBar now={60} style={{ height: "10px" }} />
            )}
            <div className="survey-start-hover-note ">Start</div>
          </Card.Body>
        </Card>
      </NavLink>
    </>
  );
};

export default SurveyCard;
