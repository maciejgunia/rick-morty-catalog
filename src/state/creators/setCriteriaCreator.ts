import { ACTION_TYPES } from ".";

const setCriteriaCreator = (payload: { query: string; page: number }) => ({
    type: ACTION_TYPES.SET_CRITERIA,
    payload
});

export default setCriteriaCreator;
