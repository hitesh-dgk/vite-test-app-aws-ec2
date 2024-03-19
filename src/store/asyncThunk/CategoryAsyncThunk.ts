import { createAsyncThunk } from "@reduxjs/toolkit";

import { setAPIErrorEvent } from "../slices/apiErrorHandlingSlice";
// import { setAPISuccessEvent, setSuccessAlertStatus } from "../slices/apiSuccessHandlingSlice";
import { addCategoryEntity, fetchCategoryRequest, updateCategoryEntity } from "../slices/categorySlice";
import { addNewCategory, getAllCategories, updateCategory } from "../../services/category.service";

export const fetchCategoriesAsyncThunk = createAsyncThunk(
    "Category/fetchCategories",
    async (data: any, thunkAPI) => {
        console.log("data");
        console.log(data)
        const response = await getAllCategories();
        console.log("response: ", response)
        if (response.status == "success") {
            const dispatchResponse = {
                categories: response.categories,
            }
            thunkAPI.dispatch(
                fetchCategoryRequest(dispatchResponse)
            );
        } else {
            const { error_type, error } = response;
            thunkAPI.dispatch(setAPIErrorEvent({ error_type, error }));
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);


export const updateCategoryAsyncThunk = createAsyncThunk(
    "Category/updateCategory",
    async (data: any, thunkAPI) => {
        console.log("update data");
        console.log(data)
        updateCategory(data)
            .then((res: any) => {
                console.log("category update success")
                console.log(res)
                thunkAPI.dispatch(updateCategoryEntity(data))
            })
            .catch((error: any) => {
                console.log("add new category error")
                console.log(error)
            })
    }
);

export const addCategoryAsyncThunk = createAsyncThunk(
    "Category/addCategory",
    async (data: any, thunkAPI) => {
        console.log("add new category data");
        console.log(data)
        addNewCategory(data)
            .then((res: any) => {
                console.log("category added success")
                console.log(res)
                thunkAPI.dispatch(addCategoryEntity({category: res.category}))
            })
            .catch((error: any) => {
                console.log("add new category error")
                console.log(error)
            })
    }
);