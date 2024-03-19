// Define a type for the slice state
export interface surveySliceState {
    userPreferenceSurveys: any[];
    fetchingApplicationSurveys: string;
    surveyDetail: any[];
    fetchSurveyDetailRequestFlag: string;
    error_msg: string;
    newSurveyCreationRequestFlag: string;
}