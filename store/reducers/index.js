import { combineReducers } from "redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import authReducer from "./authReducer";

import { createWrapper } from "next-redux-wrapper";
// import getDataReducer from "./reducers/getDataReducer";
// import tokenReducer from "./reducers/tokenReducer";
// import isUserLoggedIn from "./reducers/isUserLoggedIn";
import errorReducer from "./errorReducer";
// import cartReducer from "./reducers/cartReducer";
// import productReducer from "./reducers/productReducer";

const rootReducer = combineReducers({
    // auth: authReducer,
    // getDataReducer: getDataReducer,
    // tokenReducer: tokenReducer,
    // isUserLoggedIn: isUserLoggedIn,
    error: errorReducer,
    auth: authReducer,
    // cart: cartReducer,
    // product: productReducer
});
// const enhancers = compose(
//     (typeof window !== 'undefined' && window.devToolsExtension) ? window.devToolsExtension() : f => f, applyMiddleware(thunk)
// );
const initStore = (initialState = null) => {
    return createStore(rootReducer, compose(
        applyMiddleware(thunk),
        (global.window.devToolsExtension) ? window.devToolsExtension() : f => f
    ));
};

export const wrapper = createWrapper(initStore);