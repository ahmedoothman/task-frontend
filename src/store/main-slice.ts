import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LangAttribute } from '../types/customTypes';
const initialState = {
  lang: 'en' as LangAttribute, // Set the initial value to 'fr'
};

const mainSlice = createSlice({
  name: 'mainSlice',
  initialState,
  reducers: {
    setLang(state, action: PayloadAction<LangAttribute>) {
      state.lang = action.payload;
    },
  },
});

export const mainActions = mainSlice.actions;

export default mainSlice;
