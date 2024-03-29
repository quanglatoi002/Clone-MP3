import { useState, useRef, useEffect } from "react";
import { Outlet, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Scrollbars } from "react-custom-scrollbars-2";
import {
    SidebarLeft,
    SidebarRight,
    Player,
    Header,
    Loading,
} from "../../components";
import Map from "../../utils/Map";

const Public = () => {
    const { isLoading } = useSelector((state) => state.app);
    const { curSongId } = useSelector((state) => state.music);

    const [isShowRightSidebar, setIsShowLeftSidebar] = useState(true);
    const ref = useRef(null);
    const [scrollTop, setScrollTop] = useState(0);
    const { singer } = useParams();
    const handleScroll = () => {
        setScrollTop(ref.current.scrollTop);
    };

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
                        className={`h-[70px] flex                        items-center fixed lg:left-[240px] xl:right-[329px] max-[900px]:left-[74px] left-[149px] right-0 z-50 ${
                            singer ? "bg-transparent" : "bg-[#CED9D9] "
                        }  `}
                    >
                        <Header />
                    </div>
                    <h1>Trangchủ Next.js với Google Maps</h1>
                    <Map />
                    {!(<Header />) ? (
                        ""
                    ) : (
                        <div className="w-full h-[70px]"></div>
                    )}

                    {/* <div className="h-[90px] w-full"></div> */}

                    {/* <div className="w-full h-[70px] "></div> */}

                    <div
                        ref={ref}
                        onScroll={handleScroll}
                        className="flex-auto w-full"
                    >
                        <Outlet />
                        <div className="h-[120px] w-full"></div>
                    </div>
                </div>
                {isShowRightSidebar && (
                    <div className="w-[329px] relative hidden 3xl:flex flex-none bg-main-300 h-screen animate-slide-left ">
                        <SidebarRight />
                    </div>
                )}
            </div>

            {curSongId && (
                <div className="flex-none fixed bottom-0 w-full z-50 h-[90px] ">
                    <Player setIsShowLeftSidebar={setIsShowLeftSidebar} />
                </div>
            )}
        </div>
    );
};

export default Public;
