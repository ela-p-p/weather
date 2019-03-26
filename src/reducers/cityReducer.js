export const cityReducer = (state = {
    name: '',
    results: []
}, action) => {
    switch (action.type) {
        case "SET_NAME":
            state = {
                ...state,
                name: action.payload
            }

            break;
        case "GET_CITY":
            state = {
                ...state,
                results: [action.payload]
            }

            break;
            case "DISPLAY_CITY":
            state = {
                ...state,
                results: [action.payload]
            }

            break;
        default:
            return state
    }
    return state
};