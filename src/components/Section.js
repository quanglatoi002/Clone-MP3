import { memo } from "react";

const Section = ({ data }) => {
    return (
        <div className="mt-12 px-[59px]">
            <div className="flex items-center justify-between">
                <h3 className=" text-5 font-bold">Title</h3>
                <span className=" text-xs font-medium text-secondary">
                    Tất cả
                </span>
            </div>
            <div className=" flex-col">
                <div className="flex-row items-center justify-between"></div>
                <div></div>
            </div>
        </div>
    );
};

export default memo(Section);
