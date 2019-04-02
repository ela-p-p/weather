import { SET_NAME,GET_CITY } from "../constants/index"
import { cityAction } from "../actions";
export const cityReducer = (state = {
    name: '',
    results: [],
}, action) => {
    switch (action.type) {
        case SET_NAME:
            state = {
                ...state,
                name: action.payload
            }
            break;
        case GET_CITY:
            if (!state.results) return state = {
                ...state, results: action.payload,
                name: ''
            }
            if (state.results) {
                let newRes = state.results.filter(old => old.title !== action.payload[0].title)
                if (newRes.length > 4) {
                    newRes.pop()
                }
                state = {
                    ...state,
                    results: [...action.payload, ...newRes],
                    name: ''
                }
            }
            break;
        default:
            return state
    }
    return state
};