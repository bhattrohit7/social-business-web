// src/store.js
import { configureStore } from '@reduxjs/toolkit';
//import authReducer from './authSlice'; // Assuming you separate the reducer

// Create store
const store = configureStore({
  reducer: {
    //auth: authReducer,
  },
});

export default store;
