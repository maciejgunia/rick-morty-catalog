import { ACTIONS } from "../creators";

const charactersReducer = (state: any[] = [], action: any) => {
    switch (action.type) {
        case ACTIONS.SET_CHARACTERS:
            return action.payload;
        default:
            return state;
    }
};

export default charactersReducer;
