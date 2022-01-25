import { ACTIONS } from ".";

const setCharactersCreator = (payload: any[]) => ({
    type: ACTIONS.SET_CHARACTERS,
    payload
});

export default setCharactersCreator;
