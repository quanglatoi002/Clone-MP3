// Note đối số được truyền bởi props thì cần phải dùng Memo để ngăn re-render
import { memo, useState } from "react";
import moment from "moment";
import { useDispatch } from "react-redux";
//
import icons from "../utils/icon";
import * as actions from "../store/actions";

const { BsMusicNoteBeamed } = icons;

const SongItem = ({ songData, isHideAlbum, isListSongs, hideTime, order }) => {
    const dispatch = useDispatch();

    return (
        <div
            onClick={() => {
                dispatch(actions.setCurSongId(songData?.encodeId));
                dispatch(actions.play(true));
                dispatch(actions.playAlbum(true));
                dispatch(
                    actions.setRecent({
                        thumbnail: songData?.thumbnail,
                        title: songData?.title,
                        sid: songData?.encodeId,
                        artistsNames: songData?.artists,
                    })
                );
            }}
            className="flex justify-between border-t border-solid border-gray-400 py-[10px] px-3 hover:bg-[#DCE5E5] hover:rounded-[4px] hover:border-0 z-10 cursor-pointer"
        >
            <div
                className="flex items-center gap-[10px] flex-1 mr-10 lg:mr-0
             "
            >
                {order && (
                    <span
                        className={`${
                            order === 1
                                ? "text-shadow-no1"
                                : order === 2
                                ? "text-shadow-no2"
                                : order === 3
                                ? "text-shadow-no3"
                                : "text-shadow-rest"
                        } xl:text-[32px] text-[26px] text-main-300 flex-none flex items-center justify-center xl:w-[10%] w-[5%]`}
                    >
                        {order}
                    </span>
                )}
                {!isListSongs && !isHideAlbum && (
                    <span>
                        <BsMusicNoteBeamed />
                    </span>
                )}
                <img
                    className="w-[40px] h-[40px] object-cover rounded-md"
                    src={songData?.thumbnail}
                    alt="thumb"
                />
                <div className="flex flex-col w-full">
                    <span className="text-sm text-primary font-medium whitespace-nowrap">
                        {songData?.title?.length > 20
                            ? `${songData?.title?.slice(0, 20)}...`
                            : songData?.title}
                    </span>
                    <span className="text-xs text-secondary hover:text-hover_secondary opacity-70 cursor-pointer">
                        {songData?.artistsNames}
                    </span>
                </div>
            </div>
            {!isHideAlbum && (
                <div className="flex-1 flex items-center text-sm">
                    {songData?.album?.title.length > 30
                        ? `${songData?.album?.title.slice(0, 30)}...`
                        : songData?.album?.title}
                </div>
            )}
            <div className="flex justify-end opacity-70 text-xs">
                {moment.utc(songData?.duration * 1000).format("mm:ss")}
            </div>
        </div>
    );
};

export default memo(SongItem);
