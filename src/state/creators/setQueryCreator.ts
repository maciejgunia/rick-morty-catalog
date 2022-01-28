import { ACTION_TYPES } from ".";

const setQueryCreator = (payload: string) => ({
    type: ACTION_TYPES.SET_QUERY,
    payload
});

export default setQueryCreator;
