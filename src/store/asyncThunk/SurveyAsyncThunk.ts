import { createAsyncThunk } from "@reduxjs/toolkit";

import { setAPIErrorEvent } from "../slices/apiErrorHandlingSlice";
import { fetchSurveyDetailAction, fetchUserPreferenceSurveysAction } from "../slices/surveySlice";
import { fetchSurveyDetails, fetchUserPreferenceSurveys, storePrimarySurvey } from "../../services/survey.service";

export const fetchUserPreferenceSurveysAsyncThunk = createAsyncThunk(
    "Survey/fetchUserPreferenceSurveys",
    async (data: any, thunkAPI) => {
        console.log("data");
        console.log(data)
        const response = await fetchUserPreferenceSurveys(data.walletAddress, data.categories);
        console.log("surveys response: ", response)
        if (response.status == "success") {
            const dispatchResponse = {
                surveys: response.surveys,
            }
            thunkAPI.dispatch(
                fetchUserPreferenceSurveysAction(dispatchResponse)
            );
        } else {
            const { error_type, error } = response;
            thunkAPI.dispatch(setAPIErrorEvent({ error_type, error }));
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);


export const fetchSurveyDetailAsyncThunk = createAsyncThunk(
    "Survey/fetchSurveyDetail",
    async (data: any, thunkAPI) => {
        console.log("data");
        console.log(data)
        const response = await fetchSurveyDetails(data.survey_id);
        console.log("surveys response: ", response)
        if (response.status == "success") {
            const dispatchResponse = {
                survey: response.survey,
            }
            thunkAPI.dispatch(
                fetchSurveyDetailAction(dispatchResponse)
            );
        } else {
            const { error_type, error } = response;
            thunkAPI.dispatch(setAPIErrorEvent({ error_type, error }));
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const surveyCreationAsyncThunk = createAsyncThunk(
    "Survey/surveyCreation",
    async (data: any, thunkAPI) => {
        console.log("data");
        console.log(data)
        const response = await storePrimarySurvey(data);
        console.log("survey creation response: ", response)
        if (response.status == "success") {
            console.log("Survey created")
        } else {
            const { error_type, error } = response;
            thunkAPI.dispatch(setAPIErrorEvent({ error_type, error }));
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);