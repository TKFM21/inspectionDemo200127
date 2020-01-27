import {
    FETCH_REQUEST,
    FETCH_SUCCESS,
    FETCH_FAILURE
} from '../actions/orderInfoActionCreator';

const initialState = {
    isLoading: false,
    orderInfo: null,
    error: null
};

const orderInfoReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_REQUEST:
            return {
                ...state,
                isLoading: true
            };
        case FETCH_SUCCESS:
            return {
                ...state,
                isLoading: false,
                orderInfo: action.orderInfo
            };
        case FETCH_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.error
            };
        // case POST_SUCCESS:
        //     return {
        //         ...state,
        //         isLoading: false,
        //         todos: [ ...state.todos, action.todo ]
        //     };
        // case PUT_SUCCESS:
        //     const updateTodos = state.todos.map( todo => {
        //         if (action.todo.id === todo.id) {
        //             return action.todo;
        //         }
        //         return todo;
        //     });
        //     return {
        //         ...state,
        //         isLoading: false,
        //         todos: updateTodos
        //     };
        // case DELETE_SUCCESS:
        //     const deleteTodos = state.todos.filter( todo => {
        //         return action.todo.id !== todo.id;
        //     });
        //     return {
        //         ...state,
        //         isLoading: false,
        //         todos: deleteTodos
        //     };
        default:
            return state;
    }
};

export default orderInfoReducer;