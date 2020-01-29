import axios from "axios";
import FinalInspParam from "../models/FinalInspParam";

const API_URL =
  "";

export const FETCH_REQUEST_FIP = "FETCH_REQUEST_FIP";
export const FETCH_SUCCESS_FIP = "FETCH_SUCCESS_FIP";
export const FETCH_FAILURE_FIP = "FETCH_FAILURE_FIP";
export const POST_SUCCESS_FIP = "POST_SUCCESS_FIP";
export const PUT_SUCCESS_FIP = "PUT_SUCCESS_FIP";
export const DELETE_SUCCESS_FIP = "DELETE_SUCCESS_FIP";

export const fetchFinalInspParam = model => {
  return async dispatch => {
    dispatch(fetchRequest());
    try {
      const response = await axios.get(API_URL + model);
      const finalInspParams = FinalInspParam.finalInspParamsToInstanceArray(
        response.data.inspectionItems.items
      );
      dispatch(fetchSuccess(finalInspParams));
    } catch (error) {
      dispatch(fetchFailure(error));
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
    type: FETCH_REQUEST_FIP
  };
};

const fetchSuccess = finalInspParams => {
  return {
    type: FETCH_SUCCESS_FIP,
    finalInspParams
  };
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

const fetchFailure = error => {
  return {
    type: FETCH_FAILURE_FIP,
    error
  };
};
