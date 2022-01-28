import { ACTION_TYPES } from ".";

const setPages = (payload: number) => ({
    type: ACTION_TYPES.SET_PAGES,
    payload
});

export default setPages;
