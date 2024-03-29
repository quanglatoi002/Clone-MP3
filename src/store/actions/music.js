import actionTypes from "./actionTypes";
import * as apis from "../../apis";
import { type } from "@testing-library/user-event/dist/type";

export const setCurSongId = (sid) => ({
    type: actionTypes.SET_CUR_SONG_ID,
    sid,
});
export const play = (flag) => ({
    type: actionTypes.PLAY,
    flag,
});

export const playAlbum = (flag) => ({
    type: actionTypes.SET_ALBUM,
    flag,
});

export const setPlaylist = (songs) => ({
    type: actionTypes.PLAYLIST,
    songs,
});

export const loading = (flag) => ({
    type: actionTypes.LOADING,
    flag,
});

export const setCurSongData = (data) => ({
    type: actionTypes.SET_CUR_SONG_DATA,
    data,
});

export const setCurAlbumId = (pid) => ({
    type: actionTypes.SET_CUR_ALBUM_ID,
    pid,
});

export const setRecent = (data) => ({
    type: actionTypes.SET_RECENT,
    data,
});

export const checkLove = (data) => ({
    type: actionTypes.CHECK_LOVE,
    data,
});

export const setSearch = (keyword) => async (dispatch) => {
    try {
        const response = await apis.apiSearch(keyword);
        if (response.data.err === 0) {
            dispatch({
                type: actionTypes.SEARCH,
                data: response.data.data,
                keyword,
            });
        } else {
            dispatch({
                type: actionTypes.SEARCH,
                data: null,
                keyword: null,
            });
        }
    } catch (err) {
        dispatch({
            type: actionTypes.SEARCH,
            data: null,
            keyword: null,
        });
    }
};

export const getSearchSongs = (singerId) => async (dispatch) => {
    try {
        const response = await apis.apiGetArtistSongs(singerId);
        if (response.data.err === 0) {
            dispatch({
                type: actionTypes.PLAYLIST,
                songs: response.data.data.items,
            });
        } else {
            dispatch({
                type: actionTypes.PLAYLIST,
                songs: null,
            });
        }
    } catch (err) {
        dispatch({
            type: actionTypes.PLAYLIST,
            songs: null,
        });
    }
};

// export const fetchDetailPlaylist = (pid) => async (dispatch) => {
//     try {
//         const response = await apis.apiGetDetailPlaylist(pid);
//         if (response?.data.err === 0) {
//             dispatch({
//                 type: actionTypes.PLAYLIST,
//                 songs: response.data?.data?.song?.items,
//             });
//         }
//     } catch (err) {
//         dispatch({
//             type: actionTypes.PLAYLIST,
//             songs: null,
//         });
//     }
// };
