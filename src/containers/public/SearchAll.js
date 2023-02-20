import { useSelector } from "react-redux";
//
import { handleNumber } from "../../utils/fn";
import { Songs, SongItem } from "../../components";
const SearchAll = () => {
    const { searchData } = useSelector((state) => state.music);

    return (
        <div className="w-full flex flex-col xl:gap-[60px] gap-5">
            <div>
                <h3 className="text-lg text-primary font-bold mb-5">Nổi bật</h3>
                <div className="flex gap-8 ">
                    {searchData?.artists &&
                        searchData?.artists
                            .filter((item) => item.isOA)
                            .map((item) => (
                                <div className="p-[10px] cursor-pointer flex gap-8 items-center flex-1 bg-main-200 rounded-md">
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
                                <Songs
                                    sid={item.sid}
                                    thumbnail={item.thumbnail}
                                    artistsNames={item.artistsNames}
                                    title={item.title}
                                    size={`w-[84px] h-[84px]`}
                                    type={`bg-main-200`}
                                />
                            </div>
                        ))}
                </div>
            </div>
            <div className="flex flex-col w-full">
                <h3 className="text-lg font-bold mb-5">Bài hát</h3>
                <div className="flex w-full justify-between flex-wrap">
                    {searchData?.songs?.map((item, index) => (
                        <div
                            key={item.encodeId}
                            className={`flex-auto w-[45%] ${
                                index % 2 !== 0 ? "pl-4" : "pr-4"
                            }`}
                        >
                            <SongItem isHideAlbum songData={item} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SearchAll;
