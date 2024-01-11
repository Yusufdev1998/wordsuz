import { createSlice } from "@reduxjs/toolkit";

interface IState {
  popup: boolean;
}

const initialState: IState = {
  popup: false,
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setPopup(state, action) {
      state.popup = action.payload;
    },
  },
});

export const { setPopup } = appSlice.actions;

export default appSlice.reducer;
