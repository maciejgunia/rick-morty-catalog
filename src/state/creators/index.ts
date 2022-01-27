import goToNextPageCreator from "./nextPageCreator";
import goToPrevPageCreator from "./prevPageCreator";
import goToSelectedPageCreator from "./selectedPageCreator";
import setCharactersCreator from "./setCharactersCreator";
import setCountCreator from "./setCountCreator";
import setQueryCreator from "./setQueryCreator";
import setCriteriaCreator from "./setCriteriaCreator";

export enum ACTIONS {
    NEXT_PAGE = "nextPage",
    PREV_PAGE = "prevPage",
    SELECTED_PAGE = "selectedPage",
    SET_CHARACTERS = "setCharacters",
    SET_COUNT = "setCount",
    SET_QUERY = "setQuery",
    SET_CRITERIA = "setCriteria"
}

export type Action = {
    type: ACTIONS;
    payload: any;
};

const creators = {
    goToPrevPage: goToPrevPageCreator,
    goToNextPage: goToNextPageCreator,
    goToSelectedPage: goToSelectedPageCreator,
    setCharacters: setCharactersCreator,
    setCount: setCountCreator,
    setQuery: setQueryCreator,
    setCriteria: setCriteriaCreator
};

export default creators;
