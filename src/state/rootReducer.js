// rootReducer.js
import { combineReducers } from 'redux';
import formReducer from "../state/Slice/formSlice";
import liveFormReducer from "../state/Slice/liveFormSlice";


const rootReducer = combineReducers({
  liveForm: liveFormReducer,
  form: formReducer,
  form:liveFormReducer,
  // Add other reducers as needed
});

export default rootReducer;
