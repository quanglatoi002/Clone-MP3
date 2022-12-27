import { Home, Login, Public } from "./containers/public";
import path from "./utils/path";
import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import * as actions from "./store/actions";
import { useDispatch } from "react-redux";

function App() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(actions.getHome());
    }, [dispatch]);
    return (
        <>
            <div className="">
                <Routes>
                    <Route path={path.PUBLIC} element={<Public />}>
                        <Route path={path.HOME} element={<Home />} />
                        <Route path={path.LOGIN} element={<Login />} />

                        <Route path={path.STAR} element={<Home />} />
                    </Route>
                </Routes>
            </div>
        </>
    );
}

export default App;
