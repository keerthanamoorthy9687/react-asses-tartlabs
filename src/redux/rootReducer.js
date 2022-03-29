import { combineReducers } from "redux";
import userReducers from "./reducer";

const rootReducer = combineReducers({ app: userReducers });

export default rootReducer;
