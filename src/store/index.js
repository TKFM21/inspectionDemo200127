import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunk from "redux-thunk";
import modelParamReducer from "../reducers/modelParamReducer";
import orderInfoReducer from "../reducers/orderInfoReducer";
import orderTraceReducer from "../reducers/orderTraceReducer";
import finalInspParamReducer from "../reducers/finalInspParamReducer";
import finalRecordReducer from "../reducers/finalRecordReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const appReducer = combineReducers({
  modelParam: modelParamReducer,
  orderInfo: orderInfoReducer,
  orderTrace: orderTraceReducer,
  finalInspParam: finalInspParamReducer,
  finalRecord: finalRecordReducer
});

const rootReducer = (state, action) => {
  if (action.type === "RESET") {
    state = undefined;
  }
  return appReducer(state, action);
};

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
