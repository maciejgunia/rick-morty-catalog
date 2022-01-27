import incrementPageCreator from "./incrementPageCreator";
import setPageCreator from "./setPageCreator";
import setCharactersCreator from "./setCharactersCreator";
import setPages from "./setPagesCreator";
import setQueryCreator from "./setQueryCreator";
import setCriteriaCreator from "./setCriteriaCreator";
import decrementPageCreator from "./decrementPageCreator";

export enum ACTIONS {
    INCREMENT_PAGE = "incrementPage",
    DECREMENT_PAGE = "decrementPage",
    SET_PAGE = "setPage",
    SET_CHARACTERS = "setCharacters",
    SET_PAGES = "setPages",
    SET_QUERY = "setQuery",
    SET_CRITERIA = "setCriteria"
}

export type Action = {
    type: ACTIONS;
    payload: any;
};

const creators = {
    decrementPage: decrementPageCreator,
    incrementPage: incrementPageCreator,
    setPage: setPageCreator,
    setCharacters: setCharactersCreator,
    setPages: setPages,
    setQuery: setQueryCreator,
    setCriteria: setCriteriaCreator
};

export default creators;
