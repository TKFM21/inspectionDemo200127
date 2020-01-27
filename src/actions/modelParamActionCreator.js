import axios from 'axios';
import ModelParam from '../models/ModelParam';

const API_URL = ;

export const FETCH_REQUEST = 'FETCH_REQUEST';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';
export const POST_SUCCESS = 'POST_SUCCESS';
export const PUT_SUCCESS = 'PUT_SUCCESS';
export const DELETE_SUCCESS = 'DELETE_SUCCESS';

export const fetchModelParam = (model) => {
    return async (dispatch) => {
        dispatch( fetchRequest() );
        try {
            const response = await axios.get(API_URL + model);
            const modelParam = new ModelParam(response.data);
            dispatch( fetchSuccess(modelParam) );
        } catch (error) {
            dispatch( fetchFailure(error) );
        }
    };
};

// export const postTodos = ({ title, body }) => {
//     return async (dispatch) => {
//         dispatch( fetchRequest() );
//         try {
//             const response = await axios.post(API_URL, {
//                 title,
//                 body
//             });
//             const todo = new Todo(response.data);
//             dispatch( postSuccess(todo) );
//         } catch (error) {
//             dispatch( fetchFailure(error) );
//         }
//     };
// };

// export const putTodos = ({ id, title, body, complete }) => {
//     return async (dispatch) => {
//         dispatch( fetchRequest() );
//         try {
//             const response = await axios.put(API_URL + '/' + id, {
//                 title,
//                 body,
//                 complete
//             });
//             const todo = new Todo(response.data);
//             dispatch( putSuccess(todo) );
//         } catch (error) {
//             dispatch( fetchFailure(error) );
//         }
//     };
// };

// export const deleteTodos = (id) => {
//     return async (dispatch) => {
//         dispatch( fetchRequest() );
//         try {
//             const response = await axios.delete(API_URL + '/' + id);
//             const todo = new Todo(response.data);
//             dispatch( deleteSuccess(todo) );
//         } catch (error) {
//             dispatch( fetchFailure(error) );
//         }
//     };
// };

const fetchRequest = () => {
    return {
        type: FETCH_REQUEST
    }
};

const fetchSuccess = (modelParam) => {
    return {
        type: FETCH_SUCCESS,
        modelParam
    }
};

// const postSuccess = (todo) => {
//     return {
//         type: POST_SUCCESS,
//         todo
//     }
// };

// const putSuccess = (todo) => {
//     return {
//         type: PUT_SUCCESS,
//         todo
//     }
// };

// const deleteSuccess = (todo) => {
//     return {
//         type: DELETE_SUCCESS,
//         todo
//     }
// };

const fetchFailure = (error) => {
    return {
        type: FETCH_FAILURE,
        error
    }
};