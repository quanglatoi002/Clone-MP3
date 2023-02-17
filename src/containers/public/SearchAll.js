import { useSelector } from "react-redux";

const SearchAll = () => {
    const { searchData } = useSelector((state) => state.music);
    // console.log(searchData);
    const isOA = searchData?.artists.find((item) => item.isOA === true);
    return (
        <div className="w-full flex flex-col">
            <div>
                <h3 className="text-lg text-primary font-bold mb-5">Nổi bật</h3>
                <div className="flex gap-8">
                    {searchData?.artists && (
                        <div className="p-[10px] flex gap-8 items-center flex-1 bg-main-200 rounded-md">
                            <img
                                src={isOA?.thumbnail}
                                alt="avatar"
                                className={`w-[84px] h-[84px] object-cover rounded-full
   `}
                            />
                            <div className="flex flex-col">
                                <span>Nghệ sĩ</span>
                                <span>{isOA.title || isOA.name}</span>

                                <span>{isOA.totalFollow}</span>
                            </div>
                        </div>
                    )}
                    <div className="flex-1">song1</div>
                    <div className="flex-1">song2</div>
                </div>
            </div>
        </div>
    );
};

export default SearchAll;
