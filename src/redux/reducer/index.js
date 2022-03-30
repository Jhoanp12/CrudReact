import { combineReducers } from "redux";
import consulApiReducer from "./consulApiReducer";

export default combineReducers({
    info: consulApiReducer
})