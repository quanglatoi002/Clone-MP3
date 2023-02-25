import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { apiGetArtist } from "../../apis";

const Singer = () => {
    const { singer } = useParams();
    // console.log(singer);
    const [artistData, setArtistData] = useState(null);
    useEffect(() => {
        const fetchArtistData = async () => {
            const res = await apiGetArtist(singer);
            if (res?.data?.err === 0) {
                setArtistData(res);
            }
        };
        singer && fetchArtistData();
    }, [singer]);
    return (
        <div className="flex flex-col w-full">
            <img
                src={artistData?.data?.data?.cover}
                alt="background"
                className=" xl:mt-[70px]"
            />
        </div>
    );
};

export default Singer;
