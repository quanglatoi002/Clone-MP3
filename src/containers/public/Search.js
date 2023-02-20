import { Outlet } from "react-router-dom";
const Search = () => {
    return (
        <div className="w-full">
            <div className="flex h-[50px] mb-7 items-center text-sm border-b border-gray-400 xl:pl-[60px]  pb-1">
                <span className="hidden xl:flex text-[24px] pr-6 font-bold border-r border-gray-400">
                    Kết quả tìm kiếm
                </span>
                <div className="flex items-center cursor-pointer hover:text-main-500 font-semibold">
                    <span
                        className="px-4   
                    "
                    >
                        TẤT CẢ
                    </span>
                    <span
                        className="px-4   
                    "
                    >
                        BÀI HÁT
                    </span>
                    <span
                        className="px-4   
                    "
                    >
                        PLAYLIST/ALBUM
                    </span>
                </div>
            </div>
            <div className="w-full overflow-y-auto">
                <Outlet />
            </div>
        </div>
    );
};

export default Search;
