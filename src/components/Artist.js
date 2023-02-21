import { memo } from "react";
import { handleNumber } from "../utils/fn";
import { AiOutlineUserAdd } from "react-icons/ai";
const Artist = ({ image, title, follower }) => {
    return (
        <div className="w-1/5 flex flex-col gap-[15px]">
            <img
                src={image}
                alt="singer"
                className="w-full object-contain rounded-full"
            />
            <div className="flex gap-1 flex-col items-center">
                <span className="text-sm font-medium">{title}</span>
                <span className="text-xs opacity-70">{`${handleNumber(
                    follower
                )} quan tâm`}</span>
                <button
                    type="button"
                    className="bg-main-500 px-4 py-1 text-sm text-white uppercase rounded-full flex items-center justify-center gap-1"
                >
                    <span>
                        <AiOutlineUserAdd />
                    </span>
                    <span className="text-xs opacity-70">Quan tâm</span>
                </button>
            </div>
        </div>
    );
};

export default memo(Artist);
