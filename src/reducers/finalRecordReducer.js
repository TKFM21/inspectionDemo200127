import {
    FETCH_REQUEST_FR,
    //FETCH_SUCCESS_FR,
    FETCH_FAILURE_FR,
    POST_SUCCESS_FR
} from '../actions/finalRecordActionCreator';

const initialState = {
    isLoading: false,
    finalRecords: [],
    error: null
};

const finalRecordReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_REQUEST_FR:
            return {
                ...state,
                isLoading: true
            };
        // case FETCH_SUCCESS_FR:
        //     return {
        //         ...state,
        //         isLoading: false,
        //         orderTraces: action.orderTraces
        //     };
        case FETCH_FAILURE_FR:
            return {
                ...state,
                isLoading: false,
                error: action.error
            };
        case POST_SUCCESS_FR:
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

export default finalRecordReducer;