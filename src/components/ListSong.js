import { memo } from "react";
import SongItem from "./SongItem";

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
        </div>
    );
};

export default memo(ListSong);
