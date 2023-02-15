import { useState } from "react";
//
import icons from "../utils/icon";

const { FiMoreHorizontal, GiAlarmClock } = icons;
const SidebarRight = () => {
    const [isRecent, setIsRecent] = useState(false);
    return (
        <div className="flex flex-col w-full">
            <div className="flex text-xs h-[70px] flex-none py-[14px] px-2 justify-between items-center  cursor-pointer">
                <div className="border bg-[#DBE2E2] p-[2px] flex rounded-full">
                    <span
                        onClick={() => setIsRecent((prev) => !prev)}
                        className={`p-3 border rounded-full ${
                            !isRecent && "bg-[#E7EDED]"
                        } `}
                    >
                        Danh sách phát
                    </span>
                    <span
                        onClick={() => setIsRecent((prev) => !prev)}
                        className={`p-3 border rounded-full ${
                            isRecent && "bg-[#E7EDED]"
                        } `}
                    >
                        Nghe gần đây
                    </span>
                </div>
                <div className="flex items-center justify-between gap-2">
                    <span className="p-2 bg-[#DCE5E5] rounded-full hover:bg-[#DDE4E4]">
                        <GiAlarmClock size={16} />
                    </span>
                    <span className="p-2 bg-[#DCE5E5] rounded-full hover:bg-[#DDE4E4]">
                        <FiMoreHorizontal size={16} />
                    </span>
                </div>
            </div>
            <div>body</div>
        </div>
    );
};

export default SidebarRight;
