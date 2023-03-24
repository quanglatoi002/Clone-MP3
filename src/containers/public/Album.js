import { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../store/actions";
//
import * as apis from "../../apis";
import { ListSong, AudioLoading } from "../../components";
import icons from "../../utils/icon";

const { BsFillPlayFill } = icons;

const Album = () => {
    // location truy cập thông tin về địa chỉ URL
    const location = useLocation();
    const { pid } = useParams();

    const { isPlaying } = useSelector((state) => state.music);
    const [playlistData, setPlaylistData] = useState({});
    const dispatch = useDispatch();
    //API
    useEffect(() => {
        dispatch(actions.setCurAlbumId(pid));
        dispatch(actions.loading(true));
        const fetchDetailPlaylist = async () => {
            const response = await apis.apiGetDetailPlaylist(pid);
            dispatch(actions.loading(false));

            if (response.data?.err === 0 || response.data?.data) {
                setPlaylistData(response.data?.data);
                dispatch(
                    actions.setPlaylist(response?.data?.data?.song?.items)
                );
            }
        };
        fetchDetailPlaylist();
    }, [dispatch, pid]);

    useEffect(() => {
        if (location?.state?.playAlbum) {
            const randomSong = Math.round(
                Math.random() * playlistData?.song?.items.length - 1
            );
            dispatch(
                actions.setCurSongId(
                    playlistData?.song?.items[randomSong]?.encodeId
                )
            );
            dispatch(actions.play(true));
        }
    }, [pid, playlistData]);

    return (
        <div className="flex relative lg:flex-row flex-col gap-8 w-full animate-scale-up-center">
            <div className="flex-none w-full lg:w-1/5  flex flex-row lg:flex-col lg:items-center gap-2">
                <div className="relative overflow-hidden">
                    <img
                        src={playlistData?.thumbnailM}
                        alt="thumb"
                        className={`w-[200px] mr-5 lg:mr-0 object-contain ${
                            isPlaying
                                ? "rounded-full animate-rotate-center"
                                : "rounded-md animate-rotate-center-pause"
                        } shadow-md`}
                    />
                    <div
                        className={`absolute top-0 left-0 right-[20px] bottom-0 hover:bg-overlay-30 text-white flex justify-center items-center ${
                            isPlaying && "rounded-full"
                        }`}
                    >
                        <span className="p-2 border border-white rounded-full ">
                            {isPlaying ? (
                                <AudioLoading />
                            ) : (
                                <BsFillPlayFill size={30} />
                            )}
                        </span>
                    </div>
                </div>
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
            <div className="flex-auto mb-10">
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
