import { useState } from "react";
import { useSelector } from "react-redux";

const NewRelease = () => {
    const { newRelease } = useSelector((state) => state.app);
    const [isActive, setIsActive] = useState(0);

    return (
        <div className="mt-12 px-[59px] flex flex-col gap-5">
            <div className="flex items-center justify-between">
                <h3 className=" text-5 font-bold">{newRelease?.title}</h3>
                <span className=" text-xs font-medium text-secondary">
                    Tất cả
                </span>
            </div>
            <div className="flex items-center gap-5 text-xs">
                <button
                    type="button"
                    className={`py-1 px-4 rounded-l-full rounded-r-full border border-gray-400  ${
                        !isActive ? "bg-main-500 text-white" : "bg-transparent"
                    }`}
                >
                    VIETNAM
                </button>
                <button
                    type="button"
                    className={`py-1 px-4 rounded-l-full rounded-r-full border border-gray-400 ${
                        !isActive ? "bg-main-500 text-white" : "bg-transparent"
                    }`}
                >
                    VIETNAM
                </button>
            </div>
        </div>
    );
};

export default NewRelease;
