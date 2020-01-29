import {
  FETCH_REQUEST_FIP,
  FETCH_SUCCESS_FIP,
  FETCH_FAILURE_FIP
} from "../actions/finalInspParamActionCreator";

const initialState = {
  isLoading: false,
  finalInspParams: null,
  error: null
};

const finalInspParamReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_REQUEST_FIP:
      return {
        ...state,
        isLoading: true
      };
    case FETCH_SUCCESS_FIP:
      return {
        ...state,
        isLoading: false,
        finalInspParams: action.finalInspParams
      };
    case FETCH_FAILURE_FIP:
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

export default finalInspParamReducer;
