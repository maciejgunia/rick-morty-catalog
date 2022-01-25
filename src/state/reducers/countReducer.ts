import { ACTIONS } from "../creators";

const countReducer = (state: number = 0, action: any) => {
    switch (action.type) {
        case ACTIONS.SET_COUNT:
            return action.payload;
        default:
            return state;
    }
};

export default countReducer;
