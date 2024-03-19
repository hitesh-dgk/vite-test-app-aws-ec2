import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { surveySliceState } from './dto/SurveySliceDto';
import { fetchSurveyDetailAsyncThunk, fetchUserPreferenceSurveysAsyncThunk, surveyCreationAsyncThunk } from '../asyncThunk/SurveyAsyncThunk';

const initialState: surveySliceState = {
    userPreferenceSurveys: [],
    fetchingApplicationSurveys: "",
    surveyDetail: [],
    error_msg: "",
    fetchSurveyDetailRequestFlag: "",
    newSurveyCreationRequestFlag: ""
}

const fetchUserPreferenceSurveysActionPending = (state: any) => {
    state.error_msg = '';
    state.fetchingApplicationSurveys = 'pending';
};
const fetchUserPreferenceSurveysActionFulFilled = (state: any) => {
    state.fetchingApplicationSurveys = 'fulfilled';
};
const fetchUserPreferenceSurveysActionRejected = (state: any, action: PayloadAction<any>) => {
    // console.log(action);
    state.fetchingApplicationSurveys = 'rejected';
    state.error_msg = action.payload;
};

const fetchSurveyDetailActionPending = (state: any) => {
    state.error_msg = '';
    state.fetchSurveyDetailRequestFlag = 'pending';
};
const fetchSurveyDetailActionFulFilled = (state: any) => {
    state.fetchSurveyDetailRequestFlag = 'fulfilled';
};
const fetchSurveyDetailActionRejected = (state: any, action: PayloadAction<any>) => {
    // console.log(action);
    state.fetchSurveyDetailRequestFlag = 'rejected';
    state.error_msg = action.payload;
};

const surveyCreationActionPending = (state: any) => {
    state.error_msg = '';
    state.newSurveyCreationRequestFlag = 'pending';
};
const surveyCreationActionFulFilled = (state: any) => {
    state.newSurveyCreationRequestFlag = 'fulfilled';
};
const surveyCreationActionRejected = (state: any, action: PayloadAction<any>) => {
    // console.log(action);
    state.newSurveyCreationRequestFlag = 'rejected';
    state.error_msg = action.payload;
};


export const surveySlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        fetchUserPreferenceSurveysAction: (state, action: PayloadAction<any>) => {
            console.log("setting the UserPreference surveys")
            console.log(action.payload)
            state.userPreferenceSurveys = action.payload.surveys;
        },
        fetchSurveyDetailAction: (state, action: PayloadAction<any>) => {
            console.log("setting the UserPreference surveys")
            console.log(action.payload)
            state.surveyDetail = action.payload.survey;
        },
        resetNewSurveyCreationRequestFlag: (state, action: PayloadAction<any>) => {
            state.newSurveyCreationRequestFlag = ""
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchUserPreferenceSurveysAsyncThunk.pending, fetchUserPreferenceSurveysActionPending);
        builder.addCase(fetchUserPreferenceSurveysAsyncThunk.fulfilled, fetchUserPreferenceSurveysActionFulFilled);
        builder.addCase(fetchUserPreferenceSurveysAsyncThunk.rejected, fetchUserPreferenceSurveysActionRejected);

        builder.addCase(fetchSurveyDetailAsyncThunk.pending, fetchSurveyDetailActionPending);
        builder.addCase(fetchSurveyDetailAsyncThunk.fulfilled, fetchSurveyDetailActionFulFilled);
        builder.addCase(fetchSurveyDetailAsyncThunk.rejected, fetchSurveyDetailActionRejected);
        
        
        builder.addCase(surveyCreationAsyncThunk.pending, surveyCreationActionPending);
        builder.addCase(surveyCreationAsyncThunk.fulfilled, surveyCreationActionFulFilled);
        builder.addCase(surveyCreationAsyncThunk.rejected, surveyCreationActionRejected);
    }

})

export const { fetchUserPreferenceSurveysAction, fetchSurveyDetailAction, resetNewSurveyCreationRequestFlag } = surveySlice.actions;

export default surveySlice.reducer;