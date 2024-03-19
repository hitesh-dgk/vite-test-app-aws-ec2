import React from 'react'
import Col from 'react-bootstrap/Col';
import SurveyCard from './SurveyCard';
import LockedSurveyCard from './LockedSurveyCard';
const PrimarySurveyListing = (props: any) => {
  console.log("surveys: ", props.surveys)
  return (
    <>
      <Col>
        <SurveyCard survey={props.surveys[0]} />
      </Col>
      {Array.from({ length: 5 }).map((_, idx) => (
        <Col key={idx}>
          <LockedSurveyCard />
        </Col>
      ))}
    </>
  )
}

export default PrimarySurveyListing
