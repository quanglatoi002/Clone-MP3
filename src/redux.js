import rootReducer from "./store/reducers/rootReducer";
import { legacy_createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const reduxConfig = () => {
    const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
    return store;
};

export default reduxConfig;
