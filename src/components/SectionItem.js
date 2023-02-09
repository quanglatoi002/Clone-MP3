import { memo, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

const SectionItem = ({
    link,
    thumbnailM,
    title,
    artistsNames,
    sortDescription,
    data,
    isTrue,
}) => {
    const navigate = useNavigate();
    const [isHover, setIsHover] = useState(false);
    const imgRef = useRef();

    const handleHover = (e) => {
        setIsHover(true);
        imgRef.current.classList?.add("animate-scale-up-image");
    };
    const handleHoverLeave = (e) => {
        setIsHover(false);
        imgRef.current.classList?.remove("animate-scale-up-image");
    };
    return (
        <div
            onClick={() => {
                navigate(link?.split(".")[0]);
            }}
            className="flex flex-col gap-3 flex-auto w-1/4 text-sm cursor-pointer "
        >
            <div
                onMouseEnter={handleHover}
                onMouseLeave={handleHoverLeave}
                className="w-full relative"
            >
                {isHover && (
                    <div className=" absolute top-0 bottom-0 left-0 right-0 hover:bg-overlay-30 rounded-md"></div>
                )}
                <img
                    ref={imgRef}
                    src={thumbnailM}
                    alt="avatar"
                    className={`${
                        isTrue
                            ? "h-[97px] rounded-lg  object-contain lg:max-w-full lg:h-auto"
                            : "max-w-full h-auto object-contain rounded-lg"
                    }  `}
                />
            </div>
            <span
                className="flex flex-col 
"
            >
                <span className=" font-semibold">{title}</span>
                {data?.sectionId === "h100" ? (
                    <span> {artistsNames} </span>
                ) : (
                    <span className="mt-auto text-sm text-secondary">
                        {sortDescription?.length >= 20
                            ? `${sortDescription?.slice(0, 20)}... 1`
                            : sortDescription}
                    </span>
                )}
            </span>
        </div>
    );
};

export default memo(SectionItem);
