import { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { AiOutlineUserAdd } from "react-icons/ai";
//
import { apiGetArtist } from "../../apis";
import { Section, Songs, Artist } from "../../components";
import icons from "../../utils/icon";

const { BsFillPlayFill } = icons;

const Singer = () => {
    const { singer } = useParams();
    console.log(singer);
    const [artistData, setArtistData] = useState(null);
    const ref = useRef();
    useEffect(() => {
        const fetchArtistData = async () => {
            const res = await apiGetArtist(singer);
            if (res?.data?.err === 0) {
                setArtistData(res?.data?.data);
            }
        };
        singer && fetchArtistData();
    }, [singer]);
    useEffect(() => {
        ref.current.scrollIntoView(true);
    });
    return (
        <div className="flex flex-col w-full">
            <div ref={ref} className="relative">
                <img
                    src={artistData?.cover}
                    alt="background"
                    className="h-[410px] object-cover"
                />
                <div className=" absolute bg-gradient-to-t from-[#2E322E] to-transparent xl:px-[59px] px-[29px] bottom-0 text-white top-0 left-0 right-0">
                    <div className=" absolute bottom-0 pb-6 xl:px-[59px] px-[29px]">
                        <div className="flex items-center gap-8">
                            <h1 className="text-[60px] font-bold">
                                {artistData?.name}
                            </h1>
                            <span className=" text-green-700 py-3 pl-[14px] hover:bg-green-700 hover:text-white pr-3 rounded-full bg-white">
                                <BsFillPlayFill size={32} />
                            </span>
                        </div>
                        <div className="flex items-center gap-8 xl:mt-6 mt-2">
                            <span className="text-sm text-[rgba(254,255,255,.8)]">{`  ${Number(
                                artistData?.totalFollow?.toFixed(1)
                            ).toLocaleString()} người quan tâm`}</span>
                            <button
                                type="button"
                                className="bg-main-500 px-4 py-1 text-sm text-white uppercase rounded-full flex items-center justify-center gap-1"
                            >
                                <span>
                                    <AiOutlineUserAdd />
                                </span>
                                <span className="text-xs opacity-90">
                                    Quan tâm
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-[30px] xl:px-[59px] px-[29px] w-full flex rounded-md ">
                {artistData?.topAlbum && (
                    <div className="xl:w-[35%] flex-auto ">
                        <h3 className="mb-5 font-bold text-[20px]">Mới nhất</h3>
                        <div className="flex bg-[#BEC7C7] gap-4 xl:pr-11 p-4">
                            <img
                                src={artistData?.topAlbum?.thumbnail}
                                alt="thumbnail"
                                className="w-[151px] h-[151px] object-cover rounded-md"
                            />
                            <div className="flex flex-col text-xs text-[#rgba(20, 20, 20, 0.6)] gap-3">
                                <span className="">
                                    {artistData?.topAlbum?.textType}
                                </span>
                                <div className="flex flex-col">
                                    <span className="text-sm font-bold">
                                        {artistData?.topAlbum?.title}
                                    </span>
                                    <span>
                                        {artistData?.topAlbum?.artistNames}
                                    </span>
                                </div>
                                <span>{artistData?.topAlbum?.releaseDate}</span>
                            </div>
                        </div>
                    </div>
                )}

                <div className="xl:w-[65%] border border-red-500 flex-auto pl-6">
                    <h3 className="mb-5 font-bold text-[20px]">
                        Bài Hát Nổi Bật
                    </h3>
                    <div className="w-full flex flex-wrap gap-4">
                        {artistData?.sections
                            ?.find((item) => item.sectionType === "song")
                            ?.items?.filter((item, index) => index < 6)
                            ?.map((item) => (
                                <div
                                    key={item.encodeId}
                                    className="w-[45%] lg:w-[45%] flex-auto"
                                >
                                    <div className="w-full border-b border-gray-400 mr-5">
                                        <Songs
                                            className="w-full border-b border-green-400"
                                            sid={item.encodeId}
                                            thumbnail={item.thumbnail}
                                            title={item.title}
                                            artistsNames={item.artistsNames}
                                            size={`w-10 h-10`}
                                            isStarSinger
                                        />
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>
            </div>
            {artistData?.sections
                ?.filter((item) => item.sectionType === "playlist")
                ?.map((item, index) => (
                    <Section key={index} data={item} />
                ))}
            <div className="flex flex-col w-full px-[59px] mt-12">
                <h3 className="text-lg font-bold mb-5">
                    {
                        artistData?.sections?.find(
                            (item) => item.sectionType === "artist"
                        )?.title
                    }
                </h3>
                <div className="flex gap-[28px]">
                    {artistData?.sections
                        ?.find((item) => item.sectionType === "artist")
                        ?.items?.map((item) => (
                            <Artist
                                key={item.id}
                                title={item.name}
                                image={item.thumbnailM}
                                follower={item.totalFollow}
                                link={item.link}
                            />
                        ))}
                </div>
            </div>
            <div className="px-[59px] mt-12">
                <h3 className="text-lg font-bold mb-5">{`Về ${artistData?.name}`}</h3>
                <div className="flex gap-8 mt-5">
                    <img
                        src={artistData?.cover}
                        alt="thumbnailM"
                        className="w-[45%] h-[200px] flex-none object-cover rounded-md"
                    />
                    <div className="flex flex-col gap-12 text-sm">
                        <p
                            dangerouslySetInnerHTML={{
                                __html: artistData?.sortBiography,
                            }}
                        ></p>
                        <div className="flex flex-col gap-2">
                            <span className="text-[20px] font-bold">
                                {Number(
                                    artistData?.follow?.toFixed(1)
                                ).toLocaleString()}
                            </span>
                            <span>Người quan tâm</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" w-full h-[500px]"></div>
        </div>
    );
};

export default Singer;
