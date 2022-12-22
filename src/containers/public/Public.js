import { Outlet } from "react-router-dom";

const Public = () => {
    return (
        <div>
            Public
            <Outlet />
        </div>
    );
};

export default Public;
