import { combineReducers } from "redux";
import { isLoggedReducer } from "./isLoggedReducer";

export const rootReducer = combineReducers({
    isLogged: isLoggedReducer
})