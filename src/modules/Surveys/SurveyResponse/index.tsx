import { Container } from "react-bootstrap"
import SurveyResponderCard from "../../../components/Surveys/SurveyResponderCard"
import { useParams } from "react-router-dom"
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { fetchSurveyDetailAsyncThunk } from "../../../store/asyncThunk/SurveyAsyncThunk";
import { RootState } from "../../../store";


const SurveyResponse = () => {

    const { fetchSurveyDetailRequestFlag, surveyDetail } = useAppSelector((state: RootState) => state.surveys)
    let { survey_id } = useParams();
    const dispatch = useAppDispatch();

    useEffect(() => {
        console.log("survey_id: ", survey_id)
        dispatch(fetchSurveyDetailAsyncThunk({ survey_id }))
    }, [survey_id])

    return <>
        <Container>
            <div className="landing-page-section">

                {fetchSurveyDetailRequestFlag == "fulfilled" && <SurveyResponderCard surveyDetail={surveyDetail} />}
                {fetchSurveyDetailRequestFlag !== "fulfilled" && "Loading"}
            </div>
        </Container>
    </>
}

export default SurveyResponse