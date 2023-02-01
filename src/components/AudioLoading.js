import { Audio } from "react-loader-spinner";
import { memo } from "react";
const AudioLoading = () => {
    return (
        <Audio
            height="20"
            width="20"
            color="white"
            ariaLabel="audio-loading"
            wrapperStyle={{}}
            wrapperClass="wrapper-class"
            visible={true}
        />
    );
};

export default memo(AudioLoading);
