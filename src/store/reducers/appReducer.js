import actionTypes from "../actions/actionTypes";

const initialState = {
    banner: [],
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_HOME:
            console.log(action);
            return {
                ...state,
                banner: action.homeData?.find(
                    ((item) => item.sectionType === "banner") || null
                ),
            };
        default:
            return state;
    }
};

export default appReducer;
