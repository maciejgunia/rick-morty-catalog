import { ACTIONS } from ".";

const selectedPage = (payload: number) => ({
    type: ACTIONS.SELECTED_PAGE,
    payload
});

export default selectedPage;
