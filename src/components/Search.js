import { useState, useEffect } from "react";
//
import icons from "../utils/icon";
import { apiSearch } from "../apis";
const { FiSearch } = icons;

const Search = () => {
    const [keyword, setKeyword] = useState("");

    // useEffect(() => {
    //     window.addEventListener("keyup", handleSearch);

    //     return () => {
    //         window.removeEventListener("keyup", handleSearch);
    //     };
    // }, []);

    const handleSearch = async (e) => {
        if (e.keyCode === 13) {
            const response = await apiSearch(keyword);
            console.log(response);
        }
    };

    return (
        <div className="w-full flex items-center h-10 px-4 py-2 rounded-[20px] max-w-[440px] bg-[#DCE5E5] gap-2">
            <span>
                <FiSearch size={24} />
            </span>
            <input
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                // onChange={(e) => setKeyword((e) => e.target.value)}
                onKeyUp={handleSearch}
                className="outline-none w-full h-[34px]   bg-[#DCE5E5]"
                type="text"
                placeholder="Tìm kiếm bài hát, nghệ sĩ, lời bài hát..."
            />
        </div>
    );
};

export default Search;
