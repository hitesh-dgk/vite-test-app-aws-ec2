import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { categorySliceState } from "./dto/CategorySliceDto";
import { addCategoryAsyncThunk, fetchCategoriesAsyncThunk, updateCategoryAsyncThunk } from "../asyncThunk/CategoryAsyncThunk";


const initialState: categorySliceState = {
    categories: [],
    error_msg: '',
    fetchCategoryInitiatedStatus: '',
    updateCategoryInitiatedStatus: '',
    addCategoryInitiatedStatus: '',


}

const fetchCategoryActionPending = (state: any) => {
    state.error_msg = '';
    state.fetchCategoryInitiatedStatus = 'pending';
};
const fetchCategoryActionFulFilled = (state: any) => {
    state.fetchCategoryInitiatedStatus = 'fulfilled';
};
const fetchCategoryActionRejected = (state: any, action: PayloadAction<any>) => {
    // console.log(action);
    state.fetchCategoryInitiatedStatus = 'rejected';
    state.error_msg = action.payload;
};

const updateCategoryActionPending = (state: any) => {
    state.error_msg = '';
    state.updateCategoryInitiatedStatus = 'pending';
};
const updateCategoryActionFulFilled = (state: any) => {
    state.updateCategoryInitiatedStatus = 'fulfilled';
};
const updateCategoryActionRejected = (state: any, action: PayloadAction<any>) => {
    // console.log(action);
    state.updateCategoryInitiatedStatus = 'rejected';
    state.error_msg = action.payload;
};

const addCategoryActionPending = (state: any) => {
    state.error_msg = '';
    state.addCategoryInitiatedStatus = 'pending';
};
const addCategoryActionFulFilled = (state: any) => {
    state.addCategoryInitiatedStatus = 'fulfilled';
};
const addCategoryActionRejected = (state: any, action: PayloadAction<any>) => {
    // console.log(action);
    state.addCategoryInitiatedStatus = 'rejected';
    state.error_msg = action.payload;
};

export const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {
        fetchCategoryRequest: (state, action: PayloadAction<any>) => {
            console.log("setting the categories")
            console.log(action.payload.categories)
            state.categories = action.payload.categories;
        },
        updateCategoryEntity: (state, action: PayloadAction<any>) => {
            console.log("action.payload")
            console.log(action.payload)
            let payloadData = action.payload
            const categoryEntityIndex: any = state.categories.findIndex((category: any, index: number) => {
                if(category.category_id == payloadData.category_id) {
                    return index
                }
            })
            console.log("categoryEntityIndex: ", categoryEntityIndex)
            if(categoryEntityIndex > -1) {
                delete payloadData.category_id
                let category: any = {...state.categories[categoryEntityIndex], ...payloadData}
                console.log("updated category")
                console.log(category)
                let state_categories: any = [...state.categories]
                state_categories[categoryEntityIndex] = category
                state.categories = state_categories
            }
        },
        addCategoryEntity:  (state, action: PayloadAction<any>) => {
            let state_categories: any = [...state.categories]
            state.categories = [...state_categories, action.payload.category]

        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchCategoriesAsyncThunk.pending, fetchCategoryActionPending);
        builder.addCase(fetchCategoriesAsyncThunk.fulfilled, fetchCategoryActionFulFilled);
        builder.addCase(fetchCategoriesAsyncThunk.rejected, fetchCategoryActionRejected);
        
        builder.addCase(updateCategoryAsyncThunk.pending, updateCategoryActionPending);
        builder.addCase(updateCategoryAsyncThunk.fulfilled, updateCategoryActionFulFilled);
        builder.addCase(updateCategoryAsyncThunk.rejected, updateCategoryActionRejected);
        
        builder.addCase(addCategoryAsyncThunk.pending, addCategoryActionPending);
        builder.addCase(addCategoryAsyncThunk.fulfilled, addCategoryActionFulFilled);
        builder.addCase(addCategoryAsyncThunk.rejected, addCategoryActionRejected);
    }

})

export const { fetchCategoryRequest, updateCategoryEntity, addCategoryEntity} = categorySlice.actions;

export default categorySlice.reducer;