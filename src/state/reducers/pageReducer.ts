import { ACTIONS } from "../creators";

const pageReducer = (state: number = 1, action: any) => {
    switch (action.type) {
        case ACTIONS.PREV_PAGE:
            return state - 1;
        case ACTIONS.NEXT_PAGE:
            return state + 1;
        case ACTIONS.SELECTED_PAGE:
            return action.payload;
        default:
            return state;
    }
};

export default pageReducer;
