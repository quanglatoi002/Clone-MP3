import icons from "../utils/icon";
import Search from "./Search";
import { useNavigate, useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";

import { headerRight } from "../utils/menu";
const { HiArrowNarrowLeft, HiArrowNarrowRight } = icons;

const Header = () => {
    const navigate = useNavigate();
    const { singer } = useParams();
    return (
        <div
            className="w-full lg:px-[59px] px-[29px] flex
    justify-between items-center"
        >
            <div className="flex gap-6 w-full items-center">
                <div className="flex items-center gap-5 cursor-pointer">
                    <span onClick={() => navigate(-1)}>
                        <HiArrowNarrowLeft
                            size={24}
                            color={singer ? "gray" : "black"}
                        />
                    </span>
                    <span onClick={() => navigate(1)}>
                        <HiArrowNarrowRight size={24} />
                    </span>
                </div>
                <div className="w-1/2">
                    <Search />
                </div>
            </div>
            <div className="flex opacity-70 gap-5">
                {headerRight.map((item, index) => (
                    <NavLink key={index} to={item.path}>
                        <div className="border rounded-full p-2 bg-[#DCE5E5]  ">
                            {item.icons}
                        </div>
                    </NavLink>
                ))}
            </div>
        </div>
    );
};

export default Header;
