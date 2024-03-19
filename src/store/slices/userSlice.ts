import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { userSliceState } from "./dto/UserSliceDto";
import { fetchUserPreferenceCategoriesAsyncThunk } from '../asyncThunk/UserAsyncThunk';

const initialState: userSliceState = {
    connector: null,
    isConnected: false,
    isConnecting: true,
    isReconnecting: true,
    fetchingProtectedData: true,
    address: null,
    chainId: undefined,
    protectedData: [],
    preferenceCategories: [],
    fetchingUserPreferenceCategories: "",
    error_msg: ""
}

const fetchUserPreferenceCategoryActionPending = (state: any) => {
    state.error_msg = '';
    state.fetchingUserPreferenceCategories = 'pending';
};
const fetchUserPreferenceCategoryActionFulFilled = (state: any) => {
    state.fetchingUserPreferenceCategories = 'fulfilled';
};
const fetchUserPreferenceCategoryActionRejected = (state: any, action: PayloadAction<any>) => {
    // console.log(action);
    state.fetchingUserPreferenceCategories = 'rejected';
    state.error_msg = action.payload;
};


export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setConnector: (state, action: PayloadAction<any>) => {
            state.connector = action.payload.connector
        },
        setIsConnected: (state, action: PayloadAction<any>) => {
            state.isConnected = action.payload.isConnected
        },
        setIsConnecting: (state, action: PayloadAction<any>) => {
            state.isConnecting = action.payload.isConnecting
        },
        setIsReconnecting: (state, action: PayloadAction<any>) => {
            state.isReconnecting = action.payload.isReconnecting
        },
        setAddress: (state, action: PayloadAction<any>) => {
            state.address = action.payload.address
        },
        setChainId: (state, action: PayloadAction<any>) => {
            state.chainId = action.payload.chainId
        },
        setProtectedData : (state, action: PayloadAction<any>) => {
            state.fetchingProtectedData = false
            state.protectedData = action.payload.protectedData
        },
        userLogoutAction : (state, action: PayloadAction<any>) => {
            state.protectedData = [];
            state.preferenceCategories = [];
            state.fetchingUserPreferenceCategories = ""
            state.address = null;
            state.chainId = undefined;
            state.isConnected = false;
            state.connector = null
        },
        fetchUserPreferenceCategoriesAction: (state, action: PayloadAction<any>) => {
            console.log("setting the user preference categories")
            console.log(action.payload)
            state.preferenceCategories = action.payload.categories;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchUserPreferenceCategoriesAsyncThunk.pending, fetchUserPreferenceCategoryActionPending);
        builder.addCase(fetchUserPreferenceCategoriesAsyncThunk.fulfilled, fetchUserPreferenceCategoryActionFulFilled);
        builder.addCase(fetchUserPreferenceCategoriesAsyncThunk.rejected, fetchUserPreferenceCategoryActionRejected);
    }

})

export const { setConnector, setIsConnected, setIsConnecting, setIsReconnecting, setAddress, setChainId, setProtectedData, userLogoutAction, fetchUserPreferenceCategoriesAction } = userSlice.actions;

export default userSlice.reducer;