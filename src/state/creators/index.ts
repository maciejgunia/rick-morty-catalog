import goToNextPageCreator from "./nextPageCreator";
import goToPrevPageCreator from "./prevPageCreator";
import goToSelectedPageCreator from "./selectedPageCreator";
import setCharactersCreator from "./setCharactersCreator";
import setCountCreator from "./setCountCreator";

export enum ACTIONS {
    NEXT_PAGE = "nextPage",
    PREV_PAGE = "prevPage",
    SELECTED_PAGE = "selectedPage",
    SET_CHARACTERS = "setCharacters",
    SET_COUNT = "setCount"
}

const creators = {
    goToPrevPage: goToPrevPageCreator,
    goToNextPage: goToNextPageCreator,
    goToSelectedPage: goToSelectedPageCreator,
    setCharacters: setCharactersCreator,
    setCount: setCountCreator
};

export default creators;
