import { useSelector } from "react-redux";

import { Home, Login, Public } from "./containers/public";
import { Routes, Route } from "react-router-dom";

function App() {
    return (
        <>
            <div className="">
                <Routes>
                    <Route path="/*" element={<Public />}></Route>
                </Routes>
            </div>
        </>
    );
}

export default App;
