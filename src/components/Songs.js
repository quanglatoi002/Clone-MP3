import { memo, useState } from "react";
import moment from "moment";
import "moment/locale/vi";
import { useDispatch } from "react-redux";
///
import * as actions from "../store/actions";
import icons from "../utils/icon";

const { AiFillStar } = icons;

const Songs = ({
    sid,
    order,
    percent,
    thumbnail,
    title,
    artistsNames,
    releaseDate,
    style,
    size,
    isStarSinger,
}) => {
    const [isOrder, setIsOrder] = useState(false);
    const dispatch = useDispatch();
    return (
        <div
            onClick={() => {
                dispatch(actions.setCurSongId(sid));
                dispatch(actions.play(true));
                dispatch(
                    actions.setRecent({ thumbnail, title, sid, artistsNames })
                );
            }}
            //hover:bg-[#704385]
            className={`flex flex-auto p-[10px] w-full gap-[10px]  items-center justify-between cursor-pointer ${
                style || "text-black hover:bg-main-100 "
            }`}
        >
            <div className="flex items-center gap-4">
                {order && (
                    <span
                        className={`${
                            order === 1
                                ? "text-shadow-no1"
                                : order === 2
                                ? "text-shadow-no2"
                                : "text-shadow-no3"
                        } text-[32px] text-[rgba(77,34,104,0.9)] `}
                    >
                        {order}
                    </span>
                )}
                <img
                    src={thumbnail}
                    alt="thumbnail"
                    className={`${
                        size || "w-[60px] h-[60px]"
                    } object-cover rounded-md`}
                />
                <div
                    className={`flex flex-col gap-1 ${
                        order ? "align-center" : "justify-start items-start"
                    }`}
                >
                    <span
                        className={`font-medium text-[14px] leading-[18.2px]  ${
                            order ? "text-white" : "text-primary"
                        }`}
                    >
                        {title?.length > 25
                            ? `${title?.slice(0, 25)}...`
                            : title}
                    </span>
                    <div className="flex gap-[2px]">
                        <span
                            className={`text-xs hover:text-hover_secondary ${
                                order ? "text-[#FFFFFF80]" : "text-secondary"
                            } `}
                        >
                            {artistsNames?.length > 25
                                ? `${artistsNames?.slice(0, 25)}...`
                                : artistsNames}
                        </span>
                        {isStarSinger && (
                            <span className="opacity-50">
                                <AiFillStar size={14} />
                            </span>
                        )}
                    </div>

                    {releaseDate && (
                        <span
                            className={`text-xs ${
                                order ? "w-full" : "text-secondary"
                            }`}
                        >
                            {isOrder
                                ? moment(releaseDate * 1000).fromNow()
                                : null}
                        </span>
                    )}
                </div>
            </div>
            {percent && <span className="font-bold">{`${percent}%`}</span>}
        </div>
    );
};

export default memo(Songs);
