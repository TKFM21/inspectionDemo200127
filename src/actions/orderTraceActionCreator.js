import axios from "axios";
import OrderTrace from "../models/OrderTrace";

const API_URL =
  "https://1m";

const API_URL_GET =
  "https://oi";

export const FETCH_REQUEST_OT = "FETCH_REQUEST_OT";
export const FETCH_SUCCESS_OT = "FETCH_SUCCESS_OT";
export const FETCH_FAILURE_OT = "FETCH_FAILURE_OT";
export const POST_SUCCESS_OT = "POST_SUCCESS_OT";
export const PUT_SUCCESS_OT = "PUT_SUCCESS_OT";
export const DELETE_SUCCESS_OT = "DELETE_SUCCESS_OT";

export const fetchOrderTrace = order => {
  return async dispatch => {
    dispatch(fetchRequest());
    try {
      const response = await axios.get(API_URL_GET + order);
      const orderTraces = OrderTrace.orderTraceToInstanceArray(response.data);
      dispatch(fetchSuccess(orderTraces));
    } catch (error) {
      dispatch(fetchFailure(error));
    }
  };
};

export const postOrderTrace = ({ order, inspectionQty, ngQty, okQty }) => {
  return async dispatch => {
    dispatch(fetchRequest());
    const timestamp = Date.now();
    const processName = "製品検査";
    try {
      await axios.post(API_URL, {
        order,
        inspectionQty,
        ngQty,
        okQty,
        timestamp,
        processName
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
    type: FETCH_REQUEST_OT
  };
};

const fetchSuccess = orderTraces => {
  return {
    type: FETCH_SUCCESS_OT,
    orderTraces
  };
};

const postSuccess = () => {
  return {
    type: POST_SUCCESS_OT
  };
};

// const putSuccess = (todo) => {
//     return {
//         type: PUT_SUCCESS_OT,
//         todo
//     }
// };

// const deleteSuccess = (todo) => {
//     return {
//         type: DELETE_SUCCESS_OT,
//         todo
//     }
// };

const fetchFailure = error => {
  return {
    type: FETCH_FAILURE_OT,
    error
  };
};
