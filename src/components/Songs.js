import { memo } from "react";
import moment from "moment";
import "moment/locale/vi";
import { useDispatch } from "react-redux";
///
import * as actions from "../store/actions";

const Songs = ({ data, order, percent }) => {
    const dispatch = useDispatch();
    return (
        <div
            onClick={() => {
                dispatch(actions.setCurSongId(data.encodeId));
                dispatch(actions.play(true));
            }}
            className="flex flex-auto p-[10px] w-full gap-[10px] hover:bg-main-100 cursor-pointer"
        >
            {order && <span>1</span>}
            <img
                src={data.thumbnail}
                alt="thumbnail"
                className="w-[60px] h-[60px] object-cover rounded-md"
            />
            <div className="flex flex-col gap-1 whitespace-nowrap">
                <span className="font-medium text-[14px] leading-[18.2px] text-primary ">
                    {data.title.length > 30
                        ? `${data.title.slice(0, 30)}...`
                        : data.title}
                </span>
                <span className="text-xs text-secondary hover:text-hover_secondary">
                    {data.artistsNames}
                </span>
                {data.releaseDate && (
                    <span className=" text-xs text-secondary">
                        {moment(data.releaseDate * 1000).fromNow()}
                    </span>
                )}
            </div>
            {percent && <span>68%</span>}
        </div>
    );
};

export default memo(Songs);
