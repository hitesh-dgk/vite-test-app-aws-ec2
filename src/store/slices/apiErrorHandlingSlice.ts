import { createSlice } from '@reduxjs/toolkit';

export interface InitialStateDto {
    error_type: string;
    error: any;
}

export const initialState: InitialStateDto = {
  error_type: "",
  error: ""
};

const slice = createSlice({
  name: 'apiErrorHandling',
  initialState,
  reducers: {
    setAPIErrorEvent: (state, action) => {
      // Reseting the state, so that, the api error prompt re-opens.
      state.error = null;
      state.error_type = '';
      console.log('==== action');
      console.log(action);
      state.error_type = action.payload.error_type;
      state.error = action.payload.error;
    },
  },
});

export const { setAPIErrorEvent } = slice.actions;

export default slice.reducer;