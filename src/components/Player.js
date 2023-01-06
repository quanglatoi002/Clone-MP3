import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import * as apis from "../apis";
import icons from "../utils/icon";

const {
    AiOutlineHeart,
    BsThreeDots,
    CiRepeat,
    MdSkipPrevious,
    MdSkipNext,
    CiShuffle,
    BsFillPlayFill,
    BsPauseFill,
} = icons;

const Player = () => {
    const audioElement = new Audio(
        "https://mp3-s1-zmp3.zmdcdn.me/4c5b75e439a4d0fa89b5/7623286180255772087?authen=exp=1673158194~acl=/4c5b75e439a4d0fa89b5/*~hmac=906c91eac605fdc40046f6ee2c2451ae&fs=MTY3Mjk4NTM5NDg4NXx3ZWJWNnwwfDMdUngOTEdUngNDUdUngODU"
    );
    const { curSongId, isPlaying } = useSelector((state) => state.music);
    const [songInfo, setSongInfo] = useState(null);
    const [source, setSource] = useState(null);
    // const [isPlaying, setIsPlaying] = useState(false);
    console.log(audioElement);

    useEffect(() => {
        const fetchDetailsSong = async () => {
            const [res1, res2] = await Promise.all([
                apis.GetDetailSong(curSongId),
                apis.getSong(curSongId),
            ]);
            if (res1.data.err === 0) {
                setSongInfo(res1?.data.data);
            }
            if (res2.data.err === 0) {
                setSource(res2?.data.data["128"]);
            }
        };
        fetchDetailsSong();
    }, [curSongId]);
    // take 1
    //console.log
    //(JSON.parse(localStorage.getItem("persist:music")));

    useEffect(() => {
        audioElement.play();
    }, [curSongId]);

    const handleTogglePlayMusic = () => {};

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
            <div
                className="w-[40%] flex-auto border
             border-red-500 flex flex-col justify-center 
             gap-2 items-center py-2 font-normal"
            >
                <div className="flex gap-8 justify-center items-center text-gray-700">
                    <span title="Bật phát ngẫu nhiên">
                        <CiShuffle size={26} />
                    </span>
                    <span>
                        <MdSkipPrevious size={26} />
                    </span>
                    <span
                        onClick={handleTogglePlayMusic}
                        className="border p-1 border-gray-700 rounded-full hover:text-main-500"
                    >
                        {isPlaying ? (
                            <BsPauseFill size={30} />
                        ) : (
                            <BsFillPlayFill className="pl-1" size={30} />
                        )}
                    </span>
                    <span>
                        <MdSkipNext size={26} />
                    </span>
                    <span title="Bật phát lại tất cả">
                        <CiRepeat size={26} />
                    </span>
                </div>
                <div>bar</div>
            </div>
            <div
                className="w-[30%] flex-auto border
             border-green-500"
            >
                Volume
            </div>
        </div>
    );
};

export default Player;
