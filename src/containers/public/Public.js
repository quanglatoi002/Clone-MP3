import { useState } from "react";
import { Outlet } from "react-router-dom";

import { SidebarLeft, SidebarRight, Player, Header } from "../../components";

const Public = () => {
    const [isShowRightSidebar, setIsShowLeftSidebar] = useState(true);
    return (
        <div className="flex flex-col w-full h-screen bg-main-300 ">
            <div className="w-full h-full flex flex-auto">
                <div
                    className="lg:w-[240px] flex-none min-h-screen border
                 border-blue-500"
                >
                    <SidebarLeft />
                </div>
                <div className="flex-auto overflow-y-auto">
                    <div
                        className="h-[70px] flex
         items-center mb-5 px-[29px] lg:px-[59px] "
                    >
                        <Header />
                    </div>
                    <Outlet />
                    <div className="w-full h-[500px]"></div>
                </div>
                {isShowRightSidebar && (
                    <div className="w-[329px] hidden 3xl:flex flex-none border border-green-500 animate-slide-left bg-yellow-900">
                        <SidebarRight />
                    </div>
                )}
            </div>
            <div className="flex-none  h-[90px] border border-red-600">
                <Player setIsShowLeftSidebar={setIsShowLeftSidebar} />
            </div>
        </div>
    );
};

export default Public;
