import { memo } from "react";
import moment from "moment";
import "moment/locale/vi";
///
import SongItem from "./SongItem";
const Songs = ({ data }) => {
    return (
        <div className="flex flex-auto p-[10px] w-[45%] lg:w-[30%] gap-[10px] hover:bg-main-100">
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
                <span className=" text-xs text-secondary">
                    {moment(data.releaseDate * 1000).fromNow()}
                </span>
            </div>
        </div>
    );
};

export default memo(Songs);
