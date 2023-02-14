import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
///
import { Songs } from "./";

const NewRelease = () => {
    const [songs, setSongs] = useState([]);
    const { newRelease } = useSelector((state) => state.app);
    const [isActive, setIsActive] = useState(0);

    useEffect(() => {
        isActive
            ? setSongs(newRelease?.items.others)
            : setSongs(newRelease?.items?.vPop);
    }, [isActive, newRelease]);
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
                    onClick={() => setIsActive(0)}
                    type="button"
                    className={`py-1 px-4 rounded-l-full rounded-r-full border border-gray-400  ${
                        isActive === 0
                            ? "bg-main-500 text-white"
                            : "bg-transparent"
                    }`}
                >
                    VIỆT NAM
                </button>
                <button
                    onClick={() => setIsActive(1)}
                    type="button"
                    className={`py-1 px-4 rounded-l-full rounded-r-full border border-gray-400 ${
                        isActive === 1
                            ? "bg-main-500 text-white"
                            : "bg-transparent"
                    }`}
                >
                    QUỐC TẾ
                </button>
            </div>
            <div className="w-full flex flex-wrap">
                {songs?.map((item) => (
                    <div className="w-[45%] lg:w-[30%]">
                        <Songs
                            key={item.encodeId}
                            data={item}
                            thumbnail={item.thumbnail}
                            title = {item.title}
                            
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default NewRelease;
