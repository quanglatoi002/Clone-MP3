import icons from "../utils/icon";
import Search from "./Search";

const { HiArrowNarrowLeft, HiArrowNarrowRight } = icons;

const Header = () => {
    return (
        <div
            className="w-full flex
    justify-between items-center"
        >
            <div className="flex gap-6 w-full">
                <div className="flex items-center gap-5 text-gray-400">
                    <span>
                        <HiArrowNarrowLeft size={24} />
                    </span>
                    <span>
                        <HiArrowNarrowRight size={24} />
                    </span>
                </div>
                <div className="w-1/2">
                    <Search />
                </div>
            </div>
            <div>Login</div>
        </div>
    );
};

export default Header;
