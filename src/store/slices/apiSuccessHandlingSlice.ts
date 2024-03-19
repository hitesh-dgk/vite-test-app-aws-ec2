import { createSlice } from '@reduxjs/toolkit';

export interface InitialStateDto {
    alertStatus: boolean;
    type: string;
    message: any;
}

export const initialState: InitialStateDto = {
  alertStatus: false,
  type: "",
  message: ""
};

const slice = createSlice({
  name: 'apiSuccessHandling',
  initialState,
  reducers: {
    setAPISuccessEvent: (state, action) => {
      console.log('==== action');
      console.log(action);
      state.type = action.payload.type;
      state.message = action.payload.message;
      state.alertStatus = true;
    },
    setSuccessAlertStatus: (state, action) => {
      state.alertStatus = action.payload.alertStatus;
    }
  },
});

export const { setAPISuccessEvent, setSuccessAlertStatus } = slice.actions;

export default slice.reducer;