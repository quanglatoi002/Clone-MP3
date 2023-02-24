import { memo } from "react";
import icons from "../utils/icon";
import moment from "moment";
import { useSelector } from "react-redux";
//
import SongItem from "./SongItem";

const { BsDot } = icons;

const ListSong = ({ totalDuration, isListSongs }) => {
    const { songs } = useSelector((state) => state.music);
    return (
        <div className="flex flex-col text-secondary rounded-md ">
            <div
                className="flex  justify-between items-center font-medium px-[10px]
            "
            >
                <span
                    className={
                        isListSongs &&
                        " text-lg mb-[10px] font-bold text-primary"
                    }
                >
                    BÀI HÁT
                </span>
                {!isListSongs && (
                    <>
                        <span>ALBUM</span>
                        <span>THỜI GIAN</span>
                    </>
                )}
            </div>
            <div className="flex flex-col justify-between ">
                {songs?.map((item) => (
                    <SongItem key={item.encodeId} songData={item} isListSongs />
                ))}
            </div>
            {totalDuration && (
                <div className="flex gap-1 items-center text-xs text-secondary py-[10px] border-t border-solid border-gray-400">
                    <span>{`${songs?.length} bài hát`}</span>
                    <BsDot size={24} />
                    <span>
                        {moment.utc(totalDuration * 1000).format("HH:mm:ss")}
                    </span>
                </div>
            )}
        </div>
    );
};

export default memo(ListSong);
