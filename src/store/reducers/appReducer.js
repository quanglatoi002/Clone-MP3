import actionTypes from "../actions/actionTypes";

const initialState = {
    banner: [],
    friday: {},
    newEveryday: {},
    top100: {},
    topArtist: {},
    newMusic: [],
    isLoading: false,
    newRelease: {},
    weekChart: {},
    chart: {},
    rank: [],
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
                newEveryday: action.homeData?.find(
                    ((item) => item.sectionId === "hAutoTheme2") || {}
                ),
                top100: action.homeData?.find(
                    ((item) => item.sectionId === "h100") || {}
                ),
                topArtist: action.homeData?.find(
                    ((item) => item.sectionId === "hArtistTheme") || {}
                ),
                newMusic: {
                    ...action.homeData?.find(
                        (item) => item.sectionId === "hAlbum"
                    ),
                    title: "Nhạc mới" || {},
                },
                newRelease: {
                    ...(action.homeData?.find(
                        (item) => item.sectionType === "new-release"
                    ) || {}),
                },
                weekChart: {
                    ...(action.homeData?.find(
                        (item) => item.sectionType === "weekChart"
                    ) || {}),
                },
                chart: {
                    ...(action.homeData?.find(
                        (item) => item.sectionId === "hZC"
                    )?.chart || {}),
                },
                rank: {
                    ...(action.homeData?.find(
                        (item) => item.sectionId === "hZC"
                    ) || []),
                },
            };
        case actionTypes.LOADING:
            return {
                ...state,
                isLoading: action.flag,
            };
        default:
            return state;
    }
};

export default appReducer;
