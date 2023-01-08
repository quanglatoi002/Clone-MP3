// Note đối số được truyền bởi props thì cần phải dùng Memo để ngăn re-render
import { memo } from "react";
import moment from "moment";
//
import icons from "../utils/icon";

const { BsMusicNoteBeamed } = icons;

const SongItem = ({ songData }) => {
    return (
        <div className="flex justify-between border-b border-solid border-gray-400 p-[10px]">
            <div
                className="flex items-center gap-[10px] flex-1 mr-10 lg:mr-0
             "
            >
                <span>
                    <BsMusicNoteBeamed />
                </span>
                <img
                    className="w-[40px] h-[40px] object-cover rounded-md"
                    src={songData?.thumbnail}
                    alt="thumb"
                />
                <div className="flex flex-col">
                    <span className="text-sm text-primary font-medium whitespace-nowrap">
                        {songData?.title?.length > 20
                            ? `${songData?.title?.slice(0, 20)}...`
                            : songData?.title}
                    </span>
                    <span className="text-xs text-secondary hover:text-hover_secondary cursor-pointer">
                        {songData?.artistsNames}
                    </span>
                </div>
            </div>
            <div className="flex-1 flex items-center">
                {songData?.album?.title}
            </div>
            <div className="flex-1 flex justify-end">
                {moment.utc(songData?.duration * 1000).format("mm:ss")}
            </div>
        </div>
    );
};

export default memo(SongItem);
