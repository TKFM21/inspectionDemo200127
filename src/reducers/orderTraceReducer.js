import {
    FETCH_REQUEST_OT,
    FETCH_SUCCESS_OT,
    FETCH_FAILURE_OT,
    POST_SUCCESS_OT
} from '../actions/orderTraceActionCreator';

const initialState = {
    isLoading: false,
    orderTraces: [],
    error: null
};

const orderTraceReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_REQUEST_OT:
            return {
                ...state,
                isLoading: true
            };
        case FETCH_SUCCESS_OT:
            return {
                ...state,
                isLoading: false,
                orderTraces: action.orderTraces
            };
        case FETCH_FAILURE_OT:
            return {
                ...state,
                isLoading: false,
                error: action.error
            };
        case POST_SUCCESS_OT:
            return {
                ...state,
                isLoading: false
            };
        // case PUT_SUCCESS_OT:
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
        // case DELETE_SUCCESS_OT:
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

export default orderTraceReducer;