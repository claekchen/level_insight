import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
const middleware = [thunk, logger];
const createStoreWithMiddleware = applyMiddleware(...middleware)(createStore);

export default function configureStore(reducer, reducerPath, initialState) {
    return createStoreWithMiddleware(reducer, initialState);
}