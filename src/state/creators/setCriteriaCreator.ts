import { ACTIONS } from ".";

const setCriteriaCreator = (payload: { query: string; page: number }) => ({
    type: ACTIONS.SET_CRITERIA,
    payload
});

export default setCriteriaCreator;
