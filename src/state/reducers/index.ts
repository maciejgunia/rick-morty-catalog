import { combineReducers } from "redux";
import PageReducer from "./pageReducer";
import charactersReducer from "./charactersReducer";
import countReducer from "./countReducer";

const reducers = combineReducers({ page: PageReducer, characters: charactersReducer, count: countReducer });

export default reducers;
