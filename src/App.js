import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import * as actions from "./store/actions";
import { useDispatch } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
//
import { Home, Login, Public, Personal, Album } from "./containers/public";
import path from "./utils/path";

function App() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(actions.getHome());
    }, [dispatch]);
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
