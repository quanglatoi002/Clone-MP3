import rootReducer from "./store/reducers/rootReducer";
import { legacy_createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { persistStore } from "redux-persist";

const reduxConfig = () => {
    const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
    const persistor = persistStore(store);
    return { store, persistor };
};

export default reduxConfig;
