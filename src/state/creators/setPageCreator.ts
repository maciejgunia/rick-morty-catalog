import { ACTION_TYPES } from ".";

const setPage = (payload: number) => ({
    type: ACTION_TYPES.SET_PAGE,
    payload
});

export default setPage;
