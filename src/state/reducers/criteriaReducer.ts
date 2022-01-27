import { ACTIONS } from "../creators";
import getUrlParams from "../../helpers/getUrlParams";

// TODO: type action payloads
const criteriaReducer = (state: { page: number; query: string } = getUrlParams(), action: any) => {
    switch (action.type) {
        case ACTIONS.DECREMENT_PAGE:
            return { ...state, page: state.page - 1 };
        case ACTIONS.INCREMENT_PAGE:
            return { ...state, page: state.page + 1 };
        case ACTIONS.SET_PAGE:
            return { ...state, page: action.payload };
        case ACTIONS.SET_QUERY:
            return state.query !== action.payload ? { page: 1, query: action.payload } : state;
        case ACTIONS.SET_CRITERIA:
            return state.query !== action.payload.query || state.page !== action.payload.page
                ? { page: action.payload.page, query: action.payload.query }
                : state;
        default:
            return state;
    }
};

export default criteriaReducer;
