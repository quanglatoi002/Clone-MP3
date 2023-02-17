import { useState } from "react";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

import {
    SidebarLeft,
    SidebarRight,
    Player,
    Header,
    Loading,
} from "../../components";

const Public = () => {
    const { isLoading } = useSelector((state) => state.app);

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
                <div className="flex-auto relative overflow-y-auto border border-red-500">
                    {isLoading && (
                        <div className="flex justify-center items-center absolute z-20 top-0 bottom-0 left-0 right-0 bg-main-200">
                            <Loading />
                        </div>
                    )}

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
                    <div className="w-[329px] relative hidden 3xl:flex flex-none bg-main-300 h-screen animate-slide-left ">
                        <SidebarRight />
                    </div>
                )}
            </div>
            <div className="flex-none fixed bottom-0 w-full z-50 h-[90px] border border-red-600">
                <Player setIsShowLeftSidebar={setIsShowLeftSidebar} />
            </div>
        </div>
    );
};

export default Public;
