import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import modelParamReducer from '../reducers/modelParamReducer';
import orderInfoReducer from "../reducers/orderInfoReducer";

const inspApp = combineReducers({
    modelParam: modelParamReducer,
    orderInfo: orderInfoReducer
});

const store = createStore(
    inspApp,
    applyMiddleware(thunk)
);

export default store;
