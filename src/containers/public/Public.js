import { useState } from "react";
import { Outlet, useParams } from "react-router-dom";
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
    const { singer } = useParams();
    return (
        <div className="flex resize-none flex-col w-full h-screen bg-main-300 ">
            <div className="w-full h-full flex flex-auto">
                <div className="lg:w-[240px] flex-none min-h-screen">
                    <SidebarLeft />
                </div>
                <div className="flex-auto relative overflow-y-auto">
                    {isLoading && (
                        <div className="flex justify-center items-center absolute z-20 top-0 bottom-0 left-0 right-0 bg-main-200">
                            <Loading />
                        </div>
                    )}

                    <div
                        className={`h-[70px] flex
                        items-center fixed xl:left-[240px] xl:right-[329px] left-[75px] right-0 z-50 ${
                            singer ? "bg-transparent" : "bg-[#CED9D9] "
                        }  `}
                    >
                        <Header />
                    </div>

                    {!singer && <div className="w-full h-[70px]"></div>}
                    <div className="flex-auto w-full">
                        <Outlet />
                    </div>
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
