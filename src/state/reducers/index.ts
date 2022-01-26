import { combineReducers } from "redux";
import criteriaReducer from "./criteriaReducer";
import charactersReducer from "./charactersReducer";
import countReducer from "./countReducer";

const reducers = combineReducers({
    criteria: criteriaReducer,
    characters: charactersReducer,
    count: countReducer
});

export default reducers;
