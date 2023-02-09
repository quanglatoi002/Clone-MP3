import { memo, useState } from "react";
import { SectionItem } from "./";

const Section = ({ data, isTrue }) => {
    const [isHover, setIsHover] = useState(false);
    // console.log(data);

    return (
        <div className="mt-12 px-[59px] flex flex-col gap-5">
            <div className="flex items-center justify-between">
                <h3 className=" text-5 font-bold">{data?.title}</h3>
                <span className=" text-xs font-medium text-secondary">
                    Tất cả
                </span>
            </div>
            <div className="flex items-start justify-between gap-[28px]">
                {data &&
                    data?.items?.length > 0 &&
                    data?.items
                        ?.filter((item, index) => index <= 4)
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
