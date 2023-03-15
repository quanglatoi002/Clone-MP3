import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
//
import { searchMenu } from "../../utils/menu";

const activeStyle =
    "px-4 hover:text-main-500 font-semibold h-[54px] cursor-pointer border-b-[2px] border-green-700 text-main-500 flex items-center";
const notActiveStyle = "px-4 hover:text-main-500 font-semibold cursor";

const Search = () => {
    const { keyword } = useSelector((state) => state.music);
    console.log(keyword);
    return (
        <div className="w-full px-[29px]">
            <div className="w-full h-[70px]"></div>
            <div className="flex mb-7 items-center text-sm border-b border-gray-400 xl:pl-[60px]">
                <span className="hidden h-[50px] xl:flex text-[24px] pr-6 font-bold border-r border-gray-400">
                    Kết quả tìm kiếm
                </span>
                <div className="flex items-center cursor-pointer uppercase ">
                    {searchMenu?.map((item) => (
                        <NavLink
                            // to={item.path}
                            to={`${item.path}?q=${keyword?.replace(" ", "+")}`}
                            key={item.path}
                            className={({ isActive }) =>
                                isActive ? activeStyle : notActiveStyle
                            }
                        >
                            <span>{item.text}</span>
                        </NavLink>
                    ))}
                </div>
            </div>
            <div className="w-full ">
                <Outlet />
            </div>
            <div className="w-full h-[120px]"></div>
        </div>
    );
};

export default Search;
