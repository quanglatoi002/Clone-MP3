import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Selector, useSelector } from "react-redux";
//
import logo1 from "../assets/logo1.png";
import { sidebarMenu, sidebarNextMenu, searchMenuLeft } from "../utils/menu";
import path from "../utils/path";
import { ButtonLeft } from "./";

const notActiveStyle =
    "py-2 font-bold px-[25px] flex flex-row items-center gap-x-[10px] text-[13px] text-primary";
const activeStyle =
    "py-2 font-bold px-[25px] flex flex-row items-center gap-x-[10px] text-[13px] text-secondary";

const SidebarLeft = () => {
    const navigate = useNavigate();
    const { currentWidth } = useSelector((state) => state.app);

    return (
        <div className="flex h-full overflow-y-auto gap-5 flex-col bg-main-200">
            <div onClick={() => navigate(path.HOME)} className="">
                <img
                    src={logo1}
                    alt="logo"
                    className="w-[170px] mt-5 h-[95px] object-cover
                     hidden lg:block cursor-pointer"
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
            <div className="flex-col xl:flex hidden gap-3 px-[25px]">
                {searchMenuLeft?.map((item, index) => (
                    <ButtonLeft
                        key={index}
                        buttonLeft={item.path}
                        info={item.text}
                        bgColor={`bg-[#0E8080]`}
                    />
                ))}
                <div className="h-[90px] w-full"></div>
            </div>
        </div>
    );
};

export default SidebarLeft;
