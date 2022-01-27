import { ACTIONS } from ".";

const setPage = (payload: number) => ({
    type: ACTIONS.SET_PAGE,
    payload
});

export default setPage;
