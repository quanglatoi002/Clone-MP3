import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
//
import * as apis from "../../apis";

const Album = () => {
    const { pid } = useParams();
    const [playlistData, setPlaylistData] = useState({});
    useEffect(() => {
        const fetchDetailPlaylist = async () => {
            const response = await apis.apiGetDetailPlaylist(pid);
            // console.log(response.data?.data);
            if (response.data?.data.err === 0 || response.data?.data) {
                setPlaylistData(response.data?.data);
            }
        };
        fetchDetailPlaylist();
    }, [pid]);

    return (
        <div className="flex gap-8 w-full">
            <div
                className="flex-none w-1/5 border
             border-red-600"
            >
                <img
                    src={playlistData?.thumbnailM}
                    alt="thumb"
                    className="w-full object-contain rounded-md"
                />
            </div>
            <div
                className="flex-auto border
             border-blue-600"
            >
                playlist
            </div>
        </div>
    );
};

export default Album;
