import { memo } from "react";
import SongItem from "./SongItem";

const ListSong = ({ songs, totalDuration }) => {
    return (
        <div className="flex flex-col gap-[10px] text-secondary rounded-md ">
            <div
                className="flex p-[10px] justify-between items-center border-b border-solid border-gray-400 font-medium
            "
            >
                <span>BÀI HÁT</span>
                <span>ALBUM</span>
                <span>THỜI GIAN</span>
            </div>
            <div className="flex flex-col justify-between p-[10px]">
                {songs.map((item) => (
                    <SongItem key={item.encodeId} songData={item} />
                ))}
            </div>
        </div>
    );
};

export default memo(ListSong);
