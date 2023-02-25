import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
//
import { apiGetArtist } from "../../apis";
import { Section, SectionItem } from "../../components";

const SearchPlaylist = () => {
    const { searchData } = useSelector((state) => state.music);
    const [playlists, setPlaylists] = useState([]);
    useEffect(() => {
        const fetch = async () => {
            const res = await apiGetArtist(searchData?.top?.alias);
            if (res?.data?.err === 0) {
                setPlaylists(res.data.data.sections[1]);
            }
        };
        fetch();
    }, [searchData]);
    return (
        <div className="w-full flex flex-col xl:px-[43px] px-[13] gap-8">
            <h3>Playlist/Album</h3>
            <div className="flex items-start justify-between flex-wrap">
                {playlists &&
                    playlists?.items?.length > 0 &&
                    playlists?.items?.map((item) => (
                        <SectionItem
                            key={item.encodeId}
                            data={playlists}
                            title={item.title}
                            artistsNames={item.artistsNames}
                            sortDescription={item.sortDescription}
                            thumbnailM={item.thumbnailM}
                            link={item.link}
                        />
                    ))}
            </div>
        </div>
    );
};

export default SearchPlaylist;
