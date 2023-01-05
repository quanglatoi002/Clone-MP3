import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import * as apis from "../apis";
import icons from "../utils/icon";

const { AiOutlineHeart, AiFillHeart, BsThreeDots } = icons;

const Player = () => {
    const { curSongId } = useSelector((state) => state.music);
    const [songInfo, setSongInfo] = useState(null);
    console.log(curSongId);
    useEffect(() => {
        const fetchDetailsSong = async () => {
            const response = await apis.getInfoSong(curSongId);
            if (response.data.err === 0) {
                setSongInfo(response?.data.data);
            }
            console.log(response);
        };
        fetchDetailsSong();
    }, [curSongId]);
    // take 1
    //console.log
    //(JSON.parse(localStorage.getItem("persist:music")));

    return (
        <div className="bg-main-400 h-full px-5 flex cursor-pointer">
            <div className=" flex items-center w-[30%] gap-3 flex-auto">
                <img
                    src={songInfo?.thumbnail}
                    alt="thumbnail"
                    className="w-16 h-16 object-cover rounded-md"
                />
                <div className="flex flex-col overflow-hidden text-ellipsis whitespace-nowrap">
                    <span className="text-gray-700 text-[14px] font-medium ">
                        {songInfo?.title}
                    </span>
                    <span className="text-[12px] text-sm text-gray-500">
                        {songInfo?.artistsNames}
                    </span>
                </div>
                <div className="flex gap-4 pl-2">
                    <span>
                        <AiOutlineHeart size={16} />
                    </span>
                    <span className="hidden lg:block">
                        <BsThreeDots />
                    </span>
                </div>
            </div>
            <div className="w-[40%] flex-auto">Main Player</div>
            <div className="w-[30%] flex-auto">Volume</div>
        </div>
    );
};

export default Player;
