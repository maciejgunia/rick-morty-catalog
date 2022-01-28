import { ACTION_TYPES } from "../creators";

const pagesReducer = (state: number = 0, action: any) => {
    switch (action.type) {
        case ACTION_TYPES.SET_PAGES:
            return action.payload;
        default:
            return state;
    }
};

export default pagesReducer;
