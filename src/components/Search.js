import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, createSearchParams, useParams } from "react-router-dom";

//
import icons from "../utils/icon";
import * as actions from "../store/actions";
import path from "../utils/path";

const { FiSearch, GrClose } = icons;

const Search = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { singer } = useParams();
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
        <div
            className={`w-full flex relative items-center h-10 px-4 py-2 rounded-[20px] max-w-[440px] gap-2  ${
                singer ? "bg-[rgba(0,0,0,0.2)]" : "bg-[#DCE5E5]"
            }`}
        >
            <span>
                <FiSearch size={24} />
            </span>

            <input
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                // onChange={(e) => setKeyword((e) => e.target.value)}
                onKeyUp={handleSearch}
                className={`outline-none w-full h-[34px] bg-transparent `}
                type="text"
                placeholder="Tìm kiếm bài hát, nghệ sĩ, lời bài hát..."
            />
            {keyword && (
                <span
                    onClick={() => setKeyword("")}
                    className="cursor-pointer opacity-50"
                >
                    <GrClose size={14} />
                </span>
            )}
        </div>
    );
};

export default Search;
