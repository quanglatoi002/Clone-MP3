import { memo, useState } from "react";
import moment from "moment";
import "moment/locale/vi";
import { useDispatch } from "react-redux";
///
import * as actions from "../store/actions";

const Songs = ({
    sid,
    order,
    percent,
    thumbnail,
    title,
    artistsNames,
    releaseDate,
    style,
}) => {
    const [isOrder, setIsOrder] = useState(false);
    const dispatch = useDispatch();
    return (
        <div
            onClick={() => {
                dispatch(actions.setCurSongId(sid));
                dispatch(actions.play(true));
            }}
            //hover:bg-[#704385]
            className={`flex flex-auto p-[10px] w-full gap-[10px]  items-center justify-between cursor-pointer ${
                order
                    ? "text-white border border-alpha-bg bg-alpha-bg rounded hover:bg-[#704385]"
                    : "text-black hover:bg-main-100 "
            }`}
        >
            <div className="flex items-center gap-4">
                {order && (
                    <span
                        className={`${order} drop-shadow-md text-[32px] text-white `}
                    >
                        {order}
                    </span>
                )}
                <img
                    src={thumbnail}
                    alt="thumbnail"
                    className="w-[60px] h-[60px] object-cover rounded-md"
                />
                <div
                    className={`flex flex-col gap-1 whitespace-nowrap ${
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
                    <span
                        className={`text-xs hover:text-hover_secondary ${
                            order ? "text-[#FFFFFF80]" : "text-secondary"
                        } `}
                    >
                        {artistsNames}
                    </span>
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
            {percent && <span>{`${percent}%`}</span>}
        </div>
    );
};

export default memo(Songs);
