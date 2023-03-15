import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
///
import { ListSong } from "../../components";
import * as actions from "../../store/actions";
const SearchSongs = () => {
    const dispatch = useDispatch();
    const { searchData } = useSelector((state) => state.music);
    console.log(searchData?.top?.id);
    //sau khi có được id ca sĩ sẽ dispatch id đó qua music để lấy thông tin bài hát => actions/music
    useEffect(() => {
        dispatch(actions.getSearchSongs(searchData?.top?.id));
    }, [searchData]);

    return (
        <div className="flex-auto mb-[29px]">
            <ListSong isListSongs />
        </div>
    );
};

export default SearchSongs;
