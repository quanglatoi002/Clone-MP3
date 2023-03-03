import { useEffect, useState, memo } from "react";
import { SongItem } from "./";
import { useNavigate } from "react-router-dom";
import path from "../utils/path";

const RankList = ({ data, isHideAlbum, number, isListSongs, link }) => {
    const [isShowFull, setIsShowFull] = useState(false);
    const [songs, setSongs] = useState(null);
    const navigate = useNavigate();
    useEffect(() => {
        if (!isShowFull) {
            setSongs(data?.filter((i, index) => index < number));
        } else {
            setSongs(data?.RTChart?.items);
        }
    }, [isShowFull, data, number]);
    return (
        <div className="w-full pb-7">
            {songs?.map((item, index) => (
                <SongItem
                    key={item.encodeId}
                    songData={item}
                    isHideAlbum={isHideAlbum}
                    order={index + 1}
                    isListSongs={isListSongs}
                />
            ))}
            <div className="mt-5 w-full flex items-center justify-center">
                <button
                    onClick={() =>
                        link
                            ? navigate(link.split(".")[0])
                            : setIsShowFull((prev) => !prev)
                    }
                    className="px-6 py-2 border border-[#0E8080] text-main-500 text-sm rounded-full hover:text-white hover:bg-main-500"
                    type="button"
                >
                    {isShowFull ? "Ẩn bớt" : "Xem tất cả"}
                </button>
            </div>
        </div>
    );
};

export default memo(RankList);
