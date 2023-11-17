import { configureStore } from '@reduxjs/toolkit';
// import formReducer from '../state/Slice/formSlice';
import rootReducer from "../state/rootReducer";

const store = configureStore({
    reducer: rootReducer,
    // Add other middleware or configuration if needed
  });
  

export default store;



