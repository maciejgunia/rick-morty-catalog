import { ACTION_TYPES } from "../creators";

const charactersReducer = (state: any[] = [], action: any) => {
    switch (action.type) {
        case ACTION_TYPES.SET_CHARACTERS:
            return action.payload;
        default:
            return state;
    }
};

export default charactersReducer;
