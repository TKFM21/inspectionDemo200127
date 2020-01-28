import {
    FETCH_REQUEST_OT,
    FETCH_SUCCESS,
    FETCH_FAILURE,
    POST_SUCCESS
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
        case FETCH_SUCCESS:
            return {
                ...state,
                isLoading: false,
                orderTraces: action.orderTraces
            };
        case FETCH_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.error
            };
        case POST_SUCCESS:
            return {
                ...state,
                isLoading: false
            };
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

export default orderTraceReducer;