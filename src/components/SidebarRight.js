import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
//
import icons from "../utils/icon";
import { Songs } from "./";
import { apiGetDetailPlaylist } from "../apis";

const { FiMoreHorizontal, GiAlarmClock } = icons;
const SidebarRight = () => {
    const [isRecent, setIsRecent] = useState(false);
    const [playlist, setPlaylist] = useState();
    const { curSongData, curAlbumId, isPlaying, recentSongs, curSongId } =
        useSelector((state) => state.music);
    const fetchDetailPlaylist = async () => {
        const response = await apiGetDetailPlaylist(curAlbumId);
        if (response.data?.err === 0)
            setPlaylist(response.data?.data?.song?.items);
    };
    useEffect(() => {
        if (curAlbumId) fetchDetailPlaylist();
    }, []);
    useEffect(() => {
        if (curAlbumId && isPlaying) fetchDetailPlaylist();
    }, [curAlbumId, isPlaying]);

    useEffect(() => {
        isPlaying && setIsRecent(false);
    }, [isPlaying, curSongId]);
    return (
        <div className="flex flex-col w-full h-full">
            <div className="flex text-xs h-[70px] flex-none py-[14px] px-2 justify-between items-center  cursor-pointer">
                <div className="border bg-[#DBE2E2] p-[2px] flex rounded-full">
                    <span
                        onClick={() => setIsRecent((prev) => !prev)}
                        className={`p-3 border rounded-full ${
                            !isRecent && "bg-[#E7EDED]"
                        } `}
                    >
                        Danh sách phát
                    </span>
                    <span
                        onClick={() => setIsRecent((prev) => !prev)}
                        className={`p-3 border rounded-full ${
                            isRecent && "bg-[#E7EDED]"
                        } `}
                    >
                        Nghe gần đây
                    </span>
                </div>
                <div className="flex items-center justify-between gap-2">
                    <span className="p-2 bg-[#DCE5E5] rounded-full hover:bg-[#DDE4E4]">
                        <GiAlarmClock size={16} />
                    </span>
                    <span className="p-2 bg-[#DCE5E5] rounded-full hover:bg-[#DDE4E4]">
                        <FiMoreHorizontal size={16} />
                    </span>
                </div>
            </div>
            {isRecent ? (
                <div className="w-full overflow-y-auto flex-col flex px-2">
                    {recentSongs && (
                        <div className="flex flex-col">
                            {recentSongs?.map((item) => (
                                <Songs
                                    key={item?.sid}
                                    thumbnail={item?.thumbnail}
                                    title={item?.title}
                                    artistsNames={item?.artists}
                                    sid={item?.sid}
                                    svRight
                                />
                            ))}
                        </div>
                    )}
                </div>
            ) : (
                <div className="w-full overflow-y-auto flex-col flex px-2">
                    <Songs
                        thumbnail={curSongData?.thumbnail}
                        title={curSongData?.title}
                        artistsNames={curSongData?.artistsNames}
                        sid={curSongData?.encodeId}
                        svRight
                        style={`bg-main-500 text-white`}
                    />
                    <div className="flex flex-col pt-[15px] px-2 pb-[5px] text-black">
                        <span className="text-sm font-bold">Tiếp theo</span>
                        <span className="opacity-70 text-xs flex gap-1">
                            <span>Từ playlist</span>
                            <span className="font-semibold text-main-500">
                                {curSongData?.album?.title.length > 30
                                    ? `${curSongData?.album?.title?.slice(
                                          0,
                                          30
                                      )}...`
                                    : curSongData?.album?.title}
                            </span>
                        </span>
                    </div>
                    {playlist && (
                        <div className="flex flex-col">
                            {playlist?.map((item) => (
                                <Songs
                                    key={item?.encodeId}
                                    thumbnail={item?.thumbnail}
                                    title={item?.title}
                                    artistsNames={item?.artistsNames}
                                    sid={item?.encodeId}
                                    svRight
                                />
                            ))}
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default SidebarRight;
