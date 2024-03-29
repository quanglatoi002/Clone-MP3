import { useSelector } from "react-redux";
import { useEffect, useState, useRef } from "react";
import { useDispatch } from "react-redux";
import moment from "moment";
import { toast } from "react-toastify";
//
import * as apis from "../apis";
import icons from "../utils/icon";
import * as actions from "../store/actions";
import { LoadingSong } from "./";

const {
    AiOutlineHeart,
    BsThreeDots,
    CiRepeat,
    MdSkipPrevious,
    MdSkipNext,
    CiShuffle,
    BsFillPlayFill,
    BsPauseFill,
    TbRepeatOnce,
    BsMusicNoteList,
    SlVolumeOff,
    SlVolume2,
    SlVolume1,
} = icons;

var intervalId;

const Player = ({ setIsShowLeftSidebar }) => {
    const { curSongId, isPlaying, songs, isCheck } = useSelector(
        (state) => state.music
    );
    const [songInfo, setSongInfo] = useState(null);

    const dispatch = useDispatch();
    const [audio, setAudio] = useState(new Audio());
    const [curSeconds, setCurSeconds] = useState(0);
    const [isShuffle, setIsShuffle] = useState(false);
    const [repeatMode, setRepeatMode] = useState(0);
    // Check can show source?
    const [isLoadedSource, setIsLoadedSource] = useState(false);
    const [volume, setVolume] = useState(100);
    const [isHoverVolume, setIsHoverVolume] = useState(false);
    const [isLove, setIsLove] = useState(false);
    const thumbRef = useRef();
    const trackRef = useRef();
    const volumeRef = useRef();
    // ----->take info song and song pass parameters(id)
    useEffect(() => {
        const fetchDetailsSong = async () => {
            setIsLoadedSource(false);
            // use destructuring take two Promise.all({apiGetDetailSong, apiGetSong})
            const [res1, res2] = await Promise.all([
                apis.apiGetDetailSong(curSongId),
                apis.apiGetSong(curSongId),
            ]);
            setIsLoadedSource(true);
            if (res1.data.err === 0) {
                setSongInfo(res1?.data?.data);
                dispatch(actions.setCurSongData(res1?.data?.data));
                setCurSeconds(0);
            }
            if (res2.data.err === 0) {
                audio.pause();

                setAudio(new Audio(res2?.data?.data["128"]));
            } else {
                audio.pause();
                setAudio(new Audio()); // nếu như ko set lại Audio thì phải mất 3s để đợi nó chạy lại bài hát trước khi chuyển qua bài mới.
                dispatch(actions.play(false));
                toast.warn(res2.data.msg);
                setCurSeconds(0);
                thumbRef.current.style.cssText = `right: 100%`;
            }
        };
        fetchDetailsSong();
    }, [curSongId]);

    //
    useEffect(() => {
        intervalId && clearInterval(intervalId);
        audio.pause();
        audio.load();
        if (isPlaying) {
            audio.play();
            intervalId = setInterval(() => {
                let percent =
                    Math.round(
                        (audio.currentTime * 10000) / songInfo.duration
                    ) / 100;
                thumbRef.current.style.cssText = `right: ${100 - percent}%`;
                setCurSeconds(Math.round(audio.currentTime));
            }, 100);
        }
    }, [audio]);

    useEffect(() => {
        const handleEnded = () => {
            if (isShuffle) {
                handleShuffle();
            } else if (repeatMode) {
                repeatMode === 1 ? handleRepeatOne() : handleNextSong();
            } else {
                audio.pause();
                dispatch(actions.play(false));
            }
        };
        audio.addEventListener("ended", handleEnded);
        return () => {
            audio.removeEventListener("ended", handleEnded);
        };
    }, [audio, isShuffle, repeatMode]);

    useEffect(() => {
        audio.volume = volume / 100;
    }, [audio, volume]);

    useEffect(() => {
        if (volumeRef.current) {
            volumeRef.current.style.cssText = `right: ${100 - volume}%`;
        }
    }, [volume]);

    // -----> handle pause and play audio
    const handleTogglePlayMusic = () => {
        if (isPlaying) {
            audio.pause();
            dispatch(actions.play(false));
        } else {
            audio.play();
            dispatch(actions.play(true));
            // sẽ thông báo khi nhạc chạy xong
            // audio.onended = () => {
            //     console.log("ended");
            // };
        }
    };

    //drag and drop bar
    const handleClickProgressing = (e) => {
        const trackRect = trackRef.current.getBoundingClientRect();
        const percent = Math.round(
            ((e.clientX - trackRect.left) * 10000) / trackRect.width / 100
        );
        trackRef.current.style.cssText = `right: ${100 - percent}%`;
        audio.currentTime = (percent * songInfo.duration) / 100;
        setCurSeconds(Math.round(percent * songInfo.duration) / 100);
    };
    // next songs
    const handleNextSong = () => {
        if (songs) {
            let currentSongIndex;
            //kiểm tra xem bài hát hiện tại và gán bài hát tiếp theo = index
            songs?.forEach((item, index) => {
                if (item.encodeId === curSongId) {
                    currentSongIndex = index;
                }
            });
            //sau đó dispatch setCurSongId với vị trí hiện tại của bài hát + 1 sẽ ra bài hát tiếp theo
            dispatch(
                actions.setCurSongId(songs[currentSongIndex + 1].encodeId)
            );
            dispatch(actions.play(true));
        }
    };
    //prev songs
    // tương tự nhưng trừ đi 1
    const handlePrevSong = () => {
        if (songs) {
            let currentSongIndex;
            songs?.forEach((item, index) => {
                if (item.encodeId === curSongId) {
                    currentSongIndex = index;
                }
            });
            dispatch(
                actions.setCurSongId(songs[currentSongIndex - 1].encodeId)
            );
            dispatch(actions.play(true));
        }
    };

    const handleShuffle = () => {
        const randomIndex = Math.round(Math.random() * songs?.length);
        dispatch(actions.setCurSongId(songs[randomIndex - 1].encodeId));
        dispatch(actions.play(true));
    };

    const handleRepeatOne = () => {
        audio.play();
    };

    // useEffect(() => {
    //     dispatch(actions.checkLove(songInfo));
    // }, [songInfo, dispatch]);
    // const handleSaveLove = () => {
    //     setIsLove((prev) => !prev);
    // };

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
                    <span
                    // className={`${isCheck ? "bg-black" : "bg-transparent"}`}
                    // onClick={handleSaveLove}
                    >
                        <AiOutlineHeart color="red" size={16} />
                    </span>
                    <span className="hidden lg:block">
                        <BsThreeDots />
                    </span>
                </div>
            </div>
            <div
                className="w-[40%] flex-auto flex flex-col justify-center 
             gap-2 items-center py-2 font-normal"
            >
                <div className="flex gap-8 justify-center items-center text-gray-700">
                    <span
                        onClick={() => setIsShuffle((prev) => !prev)}
                        className={`${isShuffle && "text-purple-600"}`}
                        title="Bật phát ngẫu nhiên"
                    >
                        <CiShuffle size={26} />
                    </span>
                    <span
                        onClick={handlePrevSong}
                        className={`${
                            !songs ? "text-gray-500 " : "cursor-pointer"
                        }`}
                    >
                        <MdSkipPrevious size={26} />
                    </span>
                    <span
                        onClick={handleTogglePlayMusic}
                        className="border p-1 border-gray-700 rounded-full hover:text-main-500"
                    >
                        {!isLoadedSource ? (
                            <LoadingSong />
                        ) : isPlaying ? (
                            <BsPauseFill size={30} />
                        ) : (
                            <BsFillPlayFill className="pl-1" size={30} />
                        )}
                    </span>
                    <span
                        onClick={handleNextSong}
                        className={`${
                            !songs ? "text-gray-500 " : "cursor-pointer"
                        }`}
                    >
                        <MdSkipNext size={26} />
                    </span>
                    <span
                        onClick={() =>
                            setRepeatMode((prev) => (prev === 2 ? 0 : prev + 1))
                        }
                        className={`${repeatMode && "text-purple-600"}`}
                        title="Bật phát lại tất cả"
                    >
                        {repeatMode === 1 ? (
                            <TbRepeatOnce size={26} />
                        ) : (
                            <CiRepeat size={26} />
                        )}
                    </span>
                </div>
                <div className="w-full flex items-center px-3 lg:px-10">
                    <span className="text-xs font-medium opacity-[0.5]">
                        {moment.utc(curSeconds * 1000).format("mm:ss")}
                    </span>
                    <div
                        ref={trackRef}
                        onClick={handleClickProgressing}
                        className="h-[3px] hover:h-[6px] rounded-l-full rounded-r-full relative m-auto w-3/5 bg-[#ADC2C2]"
                    >
                        <div
                            ref={thumbRef}
                            className="absolute top-0 left-0 bottom-0 bg-[#0F8080] rounded-l-full rounded-r-full"
                        ></div>
                    </div>
                    <span className="text-xs font-medium">
                        {moment.utc(songInfo?.duration * 1000).format("mm:ss")}
                    </span>
                </div>
            </div>
            <div className="w-[30%] flex-auto flex items-center justify-end gap-4">
                <div
                    onMouseEnter={() => {
                        setIsHoverVolume(true);
                    }}
                    onMouseLeave={() => {
                        setIsHoverVolume(false);
                    }}
                    className="flex gap-2 items-center"
                >
                    <span
                        onClick={() =>
                            setVolume((prev) => (+prev === 0 ? 70 : 0))
                        }
                    >
                        {+volume >= 50 ? (
                            <SlVolume2 />
                        ) : +volume === 0 ? (
                            <SlVolumeOff />
                        ) : (
                            <SlVolume1 />
                        )}
                    </span>

                    <div
                        className={`w-[130px] h-1 bg-white rounded-full relative ${
                            isHoverVolume ? "hidden" : "relative"
                        }`}
                    >
                        <div
                            ref={volumeRef}
                            className={`absolute left-0 bottom-0 top-0 h-1 right-0 bg-main-500`}
                        ></div>
                    </div>

                    <input
                        type="range"
                        step={1}
                        min={0}
                        max={100}
                        value={volume}
                        onChange={(e) => setVolume(e.target.value)}
                        className={`w-[130px] ${
                            isHoverVolume ? "inline" : "hidden"
                        }`}
                    />
                </div>
                <span
                    onClick={() => setIsShowLeftSidebar((prev) => !prev)}
                    className="p-1 rounded-sm cursor-pointer bg-main-500 opacity-90 hover:opacity-100"
                >
                    <BsMusicNoteList size={20} />
                </span>
            </div>
        </div>
    );
};

export default Player;
