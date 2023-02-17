import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, createSearchParams } from "react-router-dom";

//
import icons from "../utils/icon";
import * as actions from "../store/actions";
import path from "../utils/path";

const { FiSearch } = icons;

const Search = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [keyword, setKeyword] = useState("");
    const handleSearch = async (e) => {
        if (e.keyCode === 13) {
            dispatch(actions.setSearch(keyword));
            navigate({
                pathname: `${path.SEARCH}/${path.ALL}`,
                search: createSearchParams({
                    q: keyword,
                }).toString(),
            });
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
