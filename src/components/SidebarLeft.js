import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
//
import logo from "../assets/logo.svg";
import { sidebarMenu } from "../utils/menu";
import path from "../utils/path";

const notActiveStyle =
    "py-2 font-bold px-[25px] flex flex-row items-center gap-x-[10px] text-[13px] text-primary";
const activeStyle =
    "py-2 font-bold px-[25px] flex flex-row items-center gap-x-[10px] text-[13px] text-secondary";

const SidebarLeft = () => {
    const navigate = useNavigate();

    return (
        <div className="flex h-full flex-col bg-main-200">
            <div onClick={() => navigate(path.HOME)} className="">
                <img
                    src={logo}
                    alt="logo"
                    className="w-[120px] h-10 
                    object-contain cursor-pointer"
                />
            </div>

            {sidebarMenu.map((item, index) => (
                <NavLink
                    key={index}
                    to={item.path}
                    className={({ isActive }) =>
                        isActive ? activeStyle : notActiveStyle
                    }
                >
                    {item.icons}
                    <span>{item.text}</span>
                </NavLink>
            ))}
        </div>
    );
};

export default SidebarLeft;
