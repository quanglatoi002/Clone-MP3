import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
//
import logo from "../assets/logo.svg";
import { sidebarMenu, sidebarNextMenu } from "../utils/menu";
import path from "../utils/path";
import { Selector, useSelector } from "react-redux";

const notActiveStyle =
    "py-2 font-bold px-[25px] flex flex-row items-center gap-x-[10px] text-[13px] text-primary";
const activeStyle =
    "py-2 font-bold px-[25px] flex flex-row items-center gap-x-[10px] text-[13px] text-secondary";

const SidebarLeft = () => {
    const navigate = useNavigate();
    const { currentWidth } = useSelector((state) => state.app);

    return (
        <div className="flex h-full gap-5 flex-col bg-main-200">
            <div onClick={() => navigate(path.HOME)} className="">
                <img
                    src={logo}
                    alt="logo"
                    className="w-[120px] h-10 
                    object-contain hidden lg:block cursor-pointer"
                />
            </div>

            <div className="border-b flex flex-col gap-2 pb-5 border-[#C7CDCD]">
                {sidebarMenu.map((item, index) => (
                    <NavLink
                        key={index}
                        to={item.path}
                        className={({ isActive }) =>
                            isActive ? activeStyle : notActiveStyle
                        }
                    >
                        {item.icons}
                        <span
                            className={`${
                                currentWidth < 900 ? "hidden" : "block"
                            }`}
                        >
                            {item.text}
                        </span>
                    </NavLink>
                ))}
            </div>
            <div className="flex flex-col gap-2">
                {sidebarNextMenu.map((item, index) => (
                    <NavLink
                        key={index}
                        to={item.path}
                        className={({ isActive }) =>
                            isActive ? activeStyle : notActiveStyle
                        }
                    >
                        {item.icons}
                        <span
                            className={`${
                                currentWidth < 900 ? "hidden" : "block"
                            }`}
                        >
                            {item.text}
                        </span>
                    </NavLink>
                ))}
            </div>
        </div>
    );
};

export default SidebarLeft;
