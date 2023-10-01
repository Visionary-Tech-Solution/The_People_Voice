import {   configureStore } from "@reduxjs/toolkit";
import { combineReducers } from 'redux';
import userSlice from "../apiSlice/userSlice";
 
const rootReducer = combineReducers({
    user:userSlice
});

//configure store
const store = configureStore({
  reducer: {
    reducer: rootReducer,
  },
});

export default store; 