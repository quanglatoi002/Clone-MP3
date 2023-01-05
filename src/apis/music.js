import axios from "../axios";

//link song
export const getSong = (sid) =>
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
export const getInfoSong = (sid) =>
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
