import actionTypes from "../actions/actionTypes";

const initialState = {
    homeData: [],
    test: "Hello World 123",
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_HONE:
            return state;
        default:
            return state;
    }
};

export default appReducer;
