// Note đối số được truyền bởi props thì cần phải dùng Memo để ngăn re-render
import { memo } from "react";
//
import icons from "../utils/icon";

const { BsMusicNoteBeamed } = icons;

const SongItem = ({ songData }) => {
    return (
        <div className="flex  justify-between items-center">
            <div className="flex items-center">
                <span>
                    <BsMusicNoteBeamed />
                </span>
                <img src={songData?.thumbnail} alt="thumb" />
                <div></div>
            </div>
            <div>album</div>
            <div>times</div>
        </div>
    );
};

export default memo(SongItem);
