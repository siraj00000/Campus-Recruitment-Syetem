const INITIAL_STATE = {
    User: [],
    counter: 0,
    info: []
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'user':
            return {
                ...state,
                User: [...state.User, action.payload]
            }
                ;
        case 'info':
            return {
                ...state,
                info: action.payload
            }
                ;
        case 'increament':
            return {
                // ...state,
                counter: state.counter + 1
            }
                ;
        case 'decreament':
            return {
                // ...state,
                counter: state.counter - 1
            }
                ;

        default: return state
    }
}