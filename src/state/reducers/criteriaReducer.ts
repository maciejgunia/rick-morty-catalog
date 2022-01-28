import { ACTION_TYPES, CatalogAction } from "../creators";
import getUrlParams from "../../helpers/getUrlParams";

const criteriaReducer = (state: { page: number; query: string } = getUrlParams(), action: CatalogAction) => {
    switch (action.type) {
        case ACTION_TYPES.DECREMENT_PAGE:
            return { ...state, page: state.page - 1 };
        case ACTION_TYPES.INCREMENT_PAGE:
            return { ...state, page: state.page + 1 };
        case ACTION_TYPES.SET_PAGE:
            return { ...state, page: action.payload };
        case ACTION_TYPES.SET_QUERY:
            return state.query !== action.payload ? { page: 1, query: action.payload } : state;
        case ACTION_TYPES.SET_CRITERIA:
            return state.query !== action.payload.query || state.page !== action.payload.page
                ? { page: action.payload.page, query: action.payload.query }
                : state;
        default:
            return state;
    }
};

export default criteriaReducer;
