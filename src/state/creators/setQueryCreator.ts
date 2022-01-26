import { ACTIONS } from ".";

const setQueryCreator = (payload: string) => ({
    type: ACTIONS.SET_QUERY,
    payload
});

export default setQueryCreator;
