
import { createAsyncThunk } from "@reduxjs/toolkit";

import { setAPIErrorEvent } from "../slices/apiErrorHandlingSlice";
import { fetchUserPreferenceCategories } from "../../services/user.service";
import { fetchUserPreferenceCategoriesAction } from "../slices/userSlice";
import { fetchUserPreferenceSurveysAction } from "../slices/surveySlice";

export const fetchUserPreferenceCategoriesAsyncThunk = createAsyncThunk(
    "User/fetchUserPreferenceCategories",
    async (walletAddress: any, thunkAPI) => {
        console.log("walletAddress");
        console.log(walletAddress)
        const response = await fetchUserPreferenceCategories(walletAddress);
        console.log("user preference response: ", response)
        if (response.status == "success") {
            const dispatchResponse = {
                categories: response.categories,
            }
            thunkAPI.dispatch(
                fetchUserPreferenceCategoriesAction(dispatchResponse)
            );
        } else {
            const { error_type, error } = response;
            thunkAPI.dispatch(setAPIErrorEvent({ error_type, error }));
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);