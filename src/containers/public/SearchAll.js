import { useSelector } from "react-redux";
//
import { handleNumber } from "../../utils/fn";
import { SongItem } from "../../components";
const SearchAll = () => {
    const { searchData } = useSelector((state) => state.music);
    // console.log(searchData);
    console.log(
        searchData?.songs?.filter((item, index) =>
            [...Array(2).keys()].some((i) => i === index)
        )
    );

    // const isOA = searchData?.artists?.find((item) => item.isOA);
    return (
        <div className="w-full flex flex-col">
            <div>
                <h3 className="text-lg text-primary font-bold mb-5">Nổi bật</h3>
                <div className="flex gap-8">
                    {searchData?.artists &&
                        searchData?.artists
                            .filter((item) => item.isOA)
                            .map((item) => (
                                <div className="p-[10px] flex gap-8 items-center flex-1 bg-main-200 rounded-md">
                                    <img
                                        src={item?.thumbnail}
                                        alt="avatar"
                                        className={`w-[84px] h-[84px] object-cover rounded-full
`}
                                    />
                                    <div className="flex flex-col">
                                        <span className="mb-[6px]">
                                            Nghệ sĩ
                                        </span>
                                        <span className=" text-sm font-semibold">
                                            {item?.title ||
                                            item?.name.length > 20
                                                ? `${item?.name.slice(
                                                      0,
                                                      20
                                                  )}...`
                                                : item?.name}
                                        </span>

                                        <span className=" text-xs text-secondary">
                                            {handleNumber(item?.totalFollow) +
                                                " quan tâm"}
                                        </span>
                                    </div>
                                </div>
                            ))}
                    {searchData?.songs
                        ?.filter((item, index) =>
                            [...Array(2).keys()].some((i) => i === index)
                        )
                        ?.map((item) => (
                            <div key={item.encodeId} className="flex-1">
                                song1
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
};

export default SearchAll;
