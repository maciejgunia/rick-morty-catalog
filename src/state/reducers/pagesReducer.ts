import { ACTIONS } from "../creators";

const pagesReducer = (state: number = 0, action: any) => {
    switch (action.type) {
        case ACTIONS.SET_PAGES:
            return action.payload;
        default:
            return state;
    }
};

export default pagesReducer;
