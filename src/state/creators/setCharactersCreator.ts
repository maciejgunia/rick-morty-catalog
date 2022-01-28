import { ACTION_TYPES } from ".";

const setCharactersCreator = (payload: any[]) => ({
    type: ACTION_TYPES.SET_CHARACTERS,
    payload
});

export default setCharactersCreator;
