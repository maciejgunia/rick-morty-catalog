import { ACTIONS } from ".";

const setCountCreator = (payload: number) => ({
    type: ACTIONS.SET_COUNT,
    payload
});

export default setCountCreator;
