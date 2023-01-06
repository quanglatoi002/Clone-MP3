import axios from "../axios";

//Note: sid => songId and pid =>playId
//link song
export const apiGetSong = (sid) =>
    new Promise(async (resolve, reject) => {
        try {
            const response = await axios({
                method: "get",
                url: "/song",
                params: { id: sid },
            });
            resolve(response);
        } catch (error) {
            reject(error);
        }
    });

//Info song
export const apiGetDetailSong = (sid) =>
    new Promise(async (resolve, reject) => {
        try {
            const response = await axios({
                method: "get",
                url: "/infosong",
                params: { id: sid },
            });
            resolve(response);
        } catch (error) {
            reject(error);
        }
    });

//Detail Playlist
export const apiGetDetailPlaylist = (pid) =>
    new Promise(async (resolve, reject) => {
        try {
            const response = await axios({
                method: "get",
                url: "/detailplaylist",
                params: { id: pid },
            });
            resolve(response);
        } catch (error) {
            reject(error);
        }
    });