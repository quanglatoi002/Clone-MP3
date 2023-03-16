import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import * as actions from "./store/actions";
import { useDispatch } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { apiGetChartHome } from "./apis";
//
import {
    Home,
    Login,
    Public,
    Personal,
    Album,
    WeekRank,
    ZingChart,
    SearchSongs,
    Search,
    SearchAll,
    Singer,
    SearchPlaylist,
} from "./containers/public";
import path from "./utils/path";

function App() {
    const dispatch = useDispatch();
    const [weekChart, setWeekChart] = useState(null);
    const [currentWidth, setCurrentWidth] = useState(window.innerWidth);
    //2 api sẽ được gọi ngay sau khi chạy trình duyệt
    useEffect(() => {
        dispatch(actions.getHome());
        const petchChartData = async () => {
            const response = await apiGetChartHome();
            console.log(response.data.data.weekChart);
            if (response.data.err === 0)
                setWeekChart(response.data.data.weekChart);
        };
        petchChartData();
    }, [dispatch]);
    const setWidth = (e) => {
        console.log("a");
        setCurrentWidth(e.target.innerWidth);
    };
    //Khi có sẽ thay đổi về kích thước thì set lại state sau đó sẽ remove sự kiện để trách rò sỉ bộ nhớ
    useEffect(() => {
        window.addEventListener("resize", setWidth);
        return () => {
            console.log("b");
            window.removeEventListener("resize", setWidth);
        };
    });
    // đẩy kích thước vừa setCurrentWidth lên redux
    useEffect(() => {
        dispatch(actions.setCurrentWidth(currentWidth));
    }, [currentWidth, dispatch]);
    console.log(currentWidth);
    //Note: Những route nào được gọi ở trong path.PUBLIC sẽ được chuyển đến <Outlet> được định nghĩa sẵn ở bên trong Public
    return (
        <>
            <div className="">
                <Routes>
                    <Route path={path.PUBLIC} element={<Public />}>
                        <Route path={path.HOME} element={<Home />} />
                        <Route path={path.LOGIN} element={<Login />} />
                        <Route path={path.MY_MUSIC} element={<Personal />} />
                        <Route
                            path={path.ALBUM__TITLE__PID}
                            element={<Album />}
                        />
                        <Route
                            path={path.PLAYLIST__TITLE__PID}
                            element={<Album />}
                        />
                        <Route
                            path={path.WEEKRANK__TITLE__PID}
                            element={
                                <WeekRank
                                    weekChart={
                                        weekChart && Object.values(weekChart)
                                    }
                                />
                            }
                        />

                        <Route path={path.ZING_CHART} element={<ZingChart />} />
                        <Route path={path.HOME__SINGER} element={<Singer />} />
                        <Route
                            path={path.HOME_ARTIST__SINGER}
                            element={<Singer />}
                        />
                        <Route path={path.SEARCH} element={<Search />}>
                            <Route path={path.ALL} element={<SearchAll />} />
                            <Route path={path.SONG} element={<SearchSongs />} />
                            <Route
                                path={path.PLAYLIST_SEARCH}
                                element={<SearchPlaylist />}
                            />
                        </Route>

                        <Route path={path.STAR} element={<Home />} />
                    </Route>
                </Routes>
            </div>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </>
    );
}

export default App;
