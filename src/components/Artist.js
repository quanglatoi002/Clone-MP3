import { memo, useState } from "react";
import { Link } from "react-router-dom";
//
import { handleNumber } from "../utils/fn";
import { AiOutlineUserAdd } from "react-icons/ai";
const Artist = ({ image, title, follower, link }) => {
    const [isHover, setIsHover] = useState(false);
    return (
        <div className="w-1/5 flex flex-col gap-[15px]">
            <Link
                className="relative overflow-hidden rounded-full cursor-pointer"
                onMouseEnter={() => {
                    setIsHover(true);
                }}
                onMouseLeave={() => {
                    setIsHover(false);
                }}
                to={link}
            >
                <img
                    src={image}
                    alt="singer"
                    className={`w-full object-contain rounded-full ${
                        isHover
                            ? "animate-scale-up-image"
                            : "animate-scale-down-image"
                    }`}
                />
                {isHover && (
                    <div className="absolute top-0 left-0 right-0 bottom-0 bg-overlay-30 rounded-full"></div>
                )}
            </Link>
            <div className="flex gap-1 flex-col items-center">
                <Link
                    to={link}
                    className="text-sm font-medium hover:underline hover:text-main-500"
                >
                    {title}
                </Link>
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