import incrementPageCreator from "./incrementPageCreator";
import setPageCreator from "./setPageCreator";
import setCharactersCreator from "./setCharactersCreator";
import setPages from "./setPagesCreator";
import setQueryCreator from "./setQueryCreator";
import setCriteriaCreator from "./setCriteriaCreator";
import decrementPageCreator from "./decrementPageCreator";

export enum ACTION_TYPES {
    INCREMENT_PAGE = "incrementPage",
    DECREMENT_PAGE = "decrementPage",
    SET_PAGE = "setPage",
    SET_CHARACTERS = "setCharacters",
    SET_PAGES = "setPages",
    SET_QUERY = "setQuery",
    SET_CRITERIA = "setCriteria"
}

type QueryAction = {
    type: ACTION_TYPES.SET_QUERY;
    payload: string;
};

type PageAction = {
    type: ACTION_TYPES.SET_PAGE | ACTION_TYPES.INCREMENT_PAGE | ACTION_TYPES.DECREMENT_PAGE;
    payload: number;
};

type CriteriaAction = {
    type: ACTION_TYPES.SET_CRITERIA;
    payload: {
        query: string;
        page: number;
    };
};

export type CatalogAction = QueryAction | PageAction | CriteriaAction;

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
