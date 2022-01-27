import { ACTIONS } from ".";

const setPages = (payload: number) => ({
    type: ACTIONS.SET_PAGES,
    payload
});

export default setPages;
