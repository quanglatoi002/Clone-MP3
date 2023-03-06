import { memo, useState } from "react";
import { useSelector } from "react-redux";
import { SectionItem } from "./";
import icons from "../utils/icon";

const { MdOutlineNavigateNext } = icons;

const Section = ({ data, isTrue }) => {
    const { currentWidth } = useSelector((state) => state.app);
    const [isHover, setIsHover] = useState(false);
    // console.log(data);
    return (
        <div className="mt-12 xl:px-[43px] px-[13px] flex flex-col gap-1">
            <div className="flex items-center justify-between">
                <h3 className=" text-5 pl-4 font-bold">{data?.title}</h3>
                <div className="flex gap-1">
                    <span className=" uppercase text-xs font-medium text-secondary">
                        Tất cả
                    </span>
                    <span>
                        <MdOutlineNavigateNext />
                    </span>
                </div>
            </div>
            <div className="flex">
                {data &&
                    data?.items?.length > 0 &&
                    data?.items
                        ?.filter(
                            (item, index) =>
                                index <=
                                (currentWidth < 600
                                    ? 2
                                    : currentWidth < 900
                                    ? 3
                                    : 4)
                        )
                        ?.map((item) => (
                            <SectionItem
                                key={item.encodeId}
                                isTrue={isTrue}
                                data={data}
                                title={item.title}
                                artistsNames={item.artistsNames}
                                sortDescription={item.sortDescription}
                                thumbnailM={item.thumbnailM}
                                link={item.link}
                            />
                        ))}
            </div>
        </div>
    );
};

export default memo(Section);
