import { ACTIONS } from "../creators";

const pageParam = +(new URLSearchParams(document.location.search).get("page") || "1");
const initialPage = isNaN(pageParam) ? 1 : pageParam;

const criteriaReducer = (state: { page: number; query: string } = { page: initialPage, query: "" }, action: any) => {
    switch (action.type) {
        case ACTIONS.PREV_PAGE:
            return { ...state, page: state.page - 1 };
        case ACTIONS.NEXT_PAGE:
            return { ...state, page: state.page + 1 };
        case ACTIONS.SELECTED_PAGE:
            return { ...state, page: action.payload };
        case ACTIONS.SET_QUERY:
            return { page: 1, query: action.payload };
        default:
            return state;
    }
};

export default criteriaReducer;
