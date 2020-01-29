import axios from "axios";
// import FinalRecord from "../models/FinalRecord";

const API_URL =
"";

export const FETCH_REQUEST_FR = "FETCH_REQUEST_FR";
export const FETCH_SUCCESS_FR = "FETCH_SUCCESS_FR";
export const FETCH_FAILURE_FR = "FETCH_FAILURE_FR";
export const POST_SUCCESS_FR = "POST_SUCCESS_FR";
export const PUT_SUCCESS_FR = "PUT_SUCCESS_FR";
export const DELETE_SUCCESS_FR = "DELETE_SUCCESS_FR";

// export const fetchOrderTrace = order => {
//   return async dispatch => {
//     dispatch(fetchRequest());
//     try {
//       const response = await axios.get(API_URL + order);
//       const orderTraces = OrderTrace.orderTraceToInstanceArray(response.data);
//       dispatch(fetchSuccess(orderTraces));
//     } catch (error) {
//       dispatch(fetchFailure(error));
//     }
//   };
// };

export const postFinalRecord = ({ order, model, judge }) => {
  return async dispatch => {
    dispatch(fetchRequest());
    try {
      await axios.post(API_URL, {
        order,
        model,
        judge
      });
      dispatch(postSuccess());
    } catch (error) {
      dispatch(fetchFailure(error));
    }
  };
};

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
    type: FETCH_REQUEST_FR
  };
};

// const fetchSuccess = orderTraces => {
//   return {
//     type: FETCH_SUCCESS_FR,
//     orderTraces
//   };
// };

const postSuccess = () => {
  return {
    type: POST_SUCCESS_FR
  };
};

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
    type: FETCH_FAILURE_FR,
    error
  };
};
