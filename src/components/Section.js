import { memo } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Section = ({ data }) => {
    const { friday } = useSelector((state) => state.app);
    const navigate = useNavigate();

    // console.log(friday);

    return (
        <div className="mt-12 px-[59px] flex flex-col gap-5">
            <div className="flex items-center justify-between">
                <h3 className=" text-5 font-bold">{friday?.title}</h3>
                <span className=" text-xs font-medium text-secondary">
                    Tất cả
                </span>
            </div>
            <div className="flex items-center justify-between gap-[28px]">
                {friday &&
                    friday?.items?.length > 0 &&
                    friday?.items.map((item) => (
                        <div
                            onClick={() => {
                                navigate(item?.link?.split(".")[0]);
                            }}
                            key={item.encodeId}
                            className="flex flex-col gap-3 flex-auto w-1/4 text-sm cursor-pointer"
                        >
                            <img
                                src={item.thumbnail}
                                alt="avatar"
                                className="w-full h-auto rounded-lg"
                            />
                            <span className="flex flex-col">
                                <span className=" font-semibold">
                                    {item.title}
                                </span>
                                <span className=" text-sm text-secondary">{`${item.sortDescription?.slice(
                                    0,
                                    50
                                )}...`}</span>
                            </span>
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default memo(Section);
