import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export enum EHomePage {
  PAGE_LEARNING = "PAGE_LEARNING",
  PAGE_MEMORIZED = "PAGE_MEMORIZED",
}

export type THomePage = EHomePage.PAGE_LEARNING | EHomePage.PAGE_MEMORIZED;

interface IHomeState {
  addWordPopup: {
    open: boolean;
  };
  wordPopup: {
    open: boolean;
  };
  page: THomePage;
}

const homeState: IHomeState = {
  addWordPopup: {
    open: false,
  },
  wordPopup: {
    open: false,
  },
  page: EHomePage.PAGE_LEARNING,
};

const homeSlice = createSlice({
  name: "home",
  initialState: homeState,
  reducers: {
    setAddWordPopup(state, action: PayloadAction<{ open: boolean }>) {
      state.addWordPopup = action.payload;
    },
    setHomePage: (state, action: PayloadAction<THomePage>) => {
      state.page = action.payload;
    },
  },
});

export const { setAddWordPopup, setHomePage } = homeSlice.actions;

export default homeSlice.reducer;
