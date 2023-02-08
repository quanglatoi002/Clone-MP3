import { memo } from "react";
import { useNavigate } from "react-router-dom";

const Section = ({ data, isTrue }) => {
    const navigate = useNavigate();

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
                            <div
                                onClick={() => {
                                    navigate(item?.link?.split(".")[0]);
                                }}
                                key={item.encodeId}
                                className="flex flex-col gap-3 flex-auto w-1/4 text-sm cursor-pointer "
                            >
                                <img
                                    src={item.thumbnail}
                                    alt="avatar"
                                    className={`${
                                        isTrue
                                            ? "h-[97px] rounded-lg  object-contain lg:max-w-full lg:h-auto"
                                            : "max-w-full h-auto object-contain rounded-lg"
                                    }  `}
                                />
                                <span
                                    className="flex flex-col 
                            "
                                >
                                    <span className=" font-semibold">
                                        {item.title}
                                    </span>
                                    {data?.sectionId === "h100" ? (
                                        <span> </span>
                                    ) : (
                                        <span className="mt-auto text-sm text-secondary">
                                            {item.sortDescription?.length >= 20
                                                ? `${item.sortDescription?.slice(
                                                      0,
                                                      20
                                                  )}... 1`
                                                : item.sortDescription}
                                        </span>
                                    )}
                                </span>
                            </div>
                        ))}
            </div>
        </div>
    );
};

export default memo(Section);
