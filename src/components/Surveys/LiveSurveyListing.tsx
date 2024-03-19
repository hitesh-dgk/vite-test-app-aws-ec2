import React from 'react'
import Col from 'react-bootstrap/Col';
import SurveyCard from './SurveyCard';
import LockedSurveyCard from './LockedSurveyCard';
const LiveSurveyListing = (props: any) => {
    console.log("surveys: ", props.surveys)
    return (
        <>
            {
                props.surveys.map((survey: any, index: number) => {
                    return <Col key={index}>
                        <SurveyCard survey={survey} />
                    </Col>
                })
            }
        </>
    )
}

export default LiveSurveyListing
