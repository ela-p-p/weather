export const cityReducer = (state = {
    name: '',
    results: [],
}, action) => {
    switch (action.type) {
        case "SET_NAME":
            state = {
                ...state,
                name: action.payload
            }
            break;
        case "FETCH_SUCCESS":
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