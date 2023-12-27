import { combineReducers } from "redux";

import { TypedUseSelectorHook, useSelector } from "react-redux";
import ActiveFormReducer from "./Reducer";
const rootReducer = combineReducers({
  activeFormsState: ActiveFormReducer,
});

export default rootReducer;
