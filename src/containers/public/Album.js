import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import moment from "moment";
import { useDispatch } from "react-redux";
import * as actions from "../../store/actions";
//
import * as apis from "../../apis";
import { ListSong } from "../../components";

const Album = () => {
    const { pid } = useParams();
    const [playlistData, setPlaylistData] = useState({});
    const dispatch = useDispatch();
    useEffect(() => {
        const fetchDetailPlaylist = async () => {
            const response = await apis.apiGetDetailPlaylist(pid);
            console.log(response.data?.err);
            if (response.data?.err === 0 || response.data?.data) {
                setPlaylistData(response.data?.data);
                dispatch(
                    actions.setPlaylist(response?.data?.data?.song?.items)
                );
            }
        };
        fetchDetailPlaylist();
    }, [pid]);

    return (
        <div className="flex lg:flex-row flex-col gap-8 w-full">
            <div
                className="flex-none w-full lg:w-1/5 border
             border-red-600 flex flex-row lg:flex-col lg:items-center gap-2"
            >
                <img
                    src={playlistData?.thumbnailM}
                    alt="thumb"
                    className=" w-[200px] mr-5 lg:mr-0 object-contain rounded-md shadow-md"
                />
                <div className="flex flex-col lg:items-center ">
                    <h3 className="text-[20px] font-bold leading-[1.5] text-gray-800">
                        {playlistData?.title}
                    </h3>
                    <div className="flex text-[12px] leading-[21px] text-secondary">
                        <span className="mr-1">Cập nhật:</span>

                        <span>
                            {moment
                                .unix(playlistData?.contentLastUpdate)
                                .format("DD/MM/YYYY")}
                        </span>
                    </div>
                    <span className="text-[12px] leading-[21px] text-secondary">
                        {playlistData?.artistsNames}
                    </span>
                    <span className="text-[12px] leading-[21px] text-secondary">
                        {`${Math.round(
                            playlistData?.like / 1000
                        )}K người yêu thích`}
                    </span>
                </div>
            </div>
            <div
                className="flex-auto border
             border-blue-600 mb-10"
            >
                <div className="flex gap-1 text-sm mb-[10px]">
                    <span className="text-secondary">Lời tựa</span>
                    <span className="text-primary line-clamp-3 text-ellipsis">
                        {playlistData?.sortDescription}
                    </span>
                </div>
                <ListSong totalDuration={playlistData?.song?.totalDuration} />
            </div>
        </div>
    );
};

export default Album;
