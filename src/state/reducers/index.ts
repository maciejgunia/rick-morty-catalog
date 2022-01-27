import { combineReducers } from "redux";
import criteriaReducer from "./criteriaReducer";
import charactersReducer from "./charactersReducer";
import pagesReducer from "./pagesReducer";

const reducers = combineReducers({
    criteria: criteriaReducer,
    characters: charactersReducer,
    pages: pagesReducer
});

export default reducers;
