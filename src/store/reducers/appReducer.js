import actionTypes from "../actions/actionTypes";

const initialState = {
    banner: [],
    friday: {},
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_HOME:
            return {
                ...state,
                banner: action.homeData?.find(
                    ((item) => item.sectionId === "hSlider") || null
                ),

                friday: action.homeData?.find(
                    ((item) => item.sectionId === "hAutoTheme1") || {}
                ),
            };
        default:
            return state;
    }
};

export default appReducer;
