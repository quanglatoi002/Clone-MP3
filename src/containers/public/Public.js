import { Outlet } from "react-router-dom";

import { SidebarLeft, SidebarRight, Player, Header } from "../../components";

const Public = () => {
    return (
        <div className="flex flex-col w-full min-h-screen bg-main-300 ">
            <div className="w-full h-full flex flex-auto">
                <div
                    className="lg:w-[240px] w-auto min-h-screen flex-none border
                 border-blue-500"
                >
                    <SidebarLeft />
                </div>
                <div className="flex-auto px-[29px] lg:px-[59px]">
                    <div
                        className="h-[70px]  flex
         items-center mb-5"
                    >
                        <Header />
                    </div>
                    <Outlet />
                </div>
                <div className="w-[329px] hidden 3xl:flex flex-none border border-green-500 animate-slide-left bg-yellow-900">
                    <SidebarRight />
                </div>
            </div>
            <div className="flex-none  h-[90px] border border-red-600">
                <Player />
            </div>
        </div>
    );
};

export default Public;
