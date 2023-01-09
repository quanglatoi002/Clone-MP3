import { memo } from "react";
import icons from "../utils/icon";
import moment from "moment";

//
import SongItem from "./SongItem";

const { BsDot } = icons;

const ListSong = ({ songs, totalDuration }) => {
    return (
        <div className="flex flex-col text-secondary rounded-md ">
            <div
                className="flex  justify-between items-center font-medium px-[10px]
            "
            >
                <span>BÀI HÁT</span>
                <span>ALBUM</span>
                <span>THỜI GIAN</span>
            </div>
            <div className="flex flex-col justify-between ">
                {songs?.map((item) => (
                    <SongItem key={item.encodeId} songData={item} />
                ))}
            </div>
            <div className="flex gap-2 items-center text-xs text-secondary p-2">
                <span>{`${songs?.length} bài hát`}</span>
                <BsDot />
                <span>
                    {moment.utc(totalDuration * 1000).format("HH:mm:ss")}
                </span>
            </div>
        </div>
    );
};

export default memo(ListSong);
