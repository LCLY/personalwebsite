import { createStore, applyMiddleware, compose } from "redux";

import ReduxThunk from "redux-thunk";
import rootReducer from "./reducers/index";

const initialState = {};

const middleware = [ReduxThunk];
var store;
if (process.env.NODE_ENV === "development") {
    store = createStore(
        rootReducer,
        initialState,
        compose(
            applyMiddleware(...middleware),
            window.__REDUX_DEVTOOLS_EXTENSION__ &&
                window.__REDUX_DEVTOOLS_EXTENSION__(), //FOR DEV
        ),
    );
} else {
    store = createStore(
        rootReducer,
        initialState,
        compose(applyMiddleware(...middleware)),
    );
}

export default store;
