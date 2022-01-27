import { bindActionCreators, createStore } from "redux";
import creators from "./creators";
import reducers from "./reducers";

const store = createStore(reducers, {});

export const { decrementPage, incrementPage, setPage, setCharacters, setPages, setQuery, setCriteria } =
    bindActionCreators(creators, store.dispatch);
export type RootState = ReturnType<typeof store.getState>;
export default store;
