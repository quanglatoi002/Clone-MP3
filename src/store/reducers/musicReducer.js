import actionTypes from "../actions/actionTypes";

const initialState = {
    curSongId: null,
    curSongData: null,
    isPlaying: false,
    atAlbum: false,
    songs: null,
    curAlbumId: null,
    recentSongs: [],
    searchData: {},
    keyword: "",
    isCheck: [],
};

const musicReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_CUR_SONG_ID:
            return {
                ...state,
                curSongId: action.sid || null,
            };
        case actionTypes.PLAY:
            return {
                ...state,
                isPlaying: action.flag,
            };
        case actionTypes.SET_ALBUM:
            return {
                ...state,
                atAlbum: action.flag,
            };
        case actionTypes.PLAYLIST:
            return {
                ...state,
                songs: action.songs || null,
            };
        case actionTypes.SET_CUR_SONG_DATA:
            return {
                ...state,
                curSongData: action.data || null,
            };
        case actionTypes.SET_CUR_ALBUM_ID:
            return {
                ...state,
                curAlbumId: action.pid || null,
            };
        case actionTypes.SET_RECENT:
            let songs = state.recentSongs;
            console.log(songs);
            if (action.data) {
                if (state.recentSongs?.some((i) => action.data.sid === i.sid)) {
                    songs = songs.filter((i) => action.data.sid !== i.sid);
                }
                if (songs.length > 19) {
                    songs = songs.filter(
                        (i, index, seft) => index !== seft.length - 1
                    );
                }

                songs = [action.data, ...songs];
            }

            return {
                ...state,
                recentSongs: songs,
            };

        case actionTypes.SEARCH:
            console.log(action.keyword);

            return {
                ...state,
                searchData: action.data || {},
                keyword: action.keyword,
            };

        case actionTypes.CHECK_LOVE:
            let loves = state.isCheck;
            loves = [action.data, ...loves];
            return {
                ...state,
                isCheck: loves || [],
            };
        default:
            return state;
    }
};

export default musicReducer;
