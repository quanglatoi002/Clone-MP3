import { memo, useState, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
//
import icons from "../utils/icon";
import * as actions from "../store/actions";

const { AiOutlineHeart, BsFillPlayFill, BsThreeDots } = icons;
const SectionItem = ({
    link,
    thumbnailM,
    title,
    artistsNames,
    sortDescription,
    data,
    isTrue,
}) => {
    const location = useLocation();
    const navigate = useNavigate();
    const [isHover, setIsHover] = useState(false);
    const imgRef = useRef();
    const dispatch = useDispatch();

    const handleHover = (e) => {
        setIsHover(true);
        imgRef.current.classList?.remove("animate-scale-down-image");
        imgRef.current.classList?.add("animate-scale-up-image");
    };
    ///// handle
    const handleHoverLeave = (e) => {
        setIsHover(false);
        imgRef.current.classList?.remove("animate-scale-up-image");
        imgRef.current.classList?.add("animate-scale-down-image");
    };
    // const handlePlayMusic = () => {
    //     dispatch(actions.setCurSongId(data?.encodeId));

    //     dispatch(actions.play(true));
    //     dispatch(actions.playAlbum(true));
    // };

    return (
        <div
            onClick={() => {
                navigate(link?.split(".")[0], { state: { playAlbum: false } });
            }}
            className="flex flex-col  flex-auto  text-sm cursor-pointer p-4"
        >
            <div
                onMouseEnter={handleHover}
                onMouseLeave={handleHoverLeave}
                className="w-full relative overflow-hidden rounded-lg"
            >
                {isHover && (
                    <div className=" absolute top-0 bottom-0 left-0 z-40 right-0 hover:bg-overlay-30 rounded-lg text-white flex items-center justify-around">
                        <span>
                            <AiOutlineHeart size={17} />
                        </span>
                        <span>
                            <BsFillPlayFill
                                onClick={(e) => {
                                    e.stopPropagation();
                                    navigate(link?.split(".")[0], {
                                        state: { playAlbum: true },
                                    });
                                }}
                                size={30}
                                className="border pl-[2px] rounded-full"
                            />
                        </span>
                        <span>
                            <BsThreeDots size={17} />
                        </span>
                    </div>
                )}
                <img
                    ref={imgRef}
                    src={thumbnailM}
                    alt="avatar"
                    className={`${
                        isTrue
                            ? " rounded-lg object-contain lg:max-w-full lg:h-auto"
                            : "max-w-full h-auto object-contain rounded-lg"
                    }  `}
                />
            </div>
            <span
                className="flex flex-col 
"
            >
                <span className=" font-semibold">
                    {title?.length > 30 ? title.slice(0, 30) + "..." : title}
                </span>
                {data?.sectionId === "h100" ? (
                    <span> {artistsNames} </span>
                ) : (
                    <span className="mt-auto text-sm text-secondary">
                        {sortDescription?.length >= 20
                            ? `${sortDescription?.slice(0, 20)}...`
                            : sortDescription}
                    </span>
                )}
            </span>
        </div>
    );
};

export default memo(SectionItem);
