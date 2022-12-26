import icons from "../utils/icon";
const { FiSearch } = icons;

const search = () => {
    return (
        <div className="w-full flex items-center h-10 px-4 py-2 rounded-[20px] max-w-[440px] bg-[#DCE5E5] gap-2">
            <span>
                <FiSearch size={24} />
            </span>
            <input
                className="outline-none w-full h-[34px]   bg-[#DCE5E5]"
                type="text"
                placeholder="Tìm kiếm bài hát, nghệ sĩ, lời bài hát..."
            />
        </div>
    );
};

export default search;
