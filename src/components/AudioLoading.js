import { Audio, ThreeCircles } from "react-loader-spinner";
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

const AudioCircles = () => {
    return (
        <ThreeCircles
            height="100"
            width="100"
            color="#0F8080"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            ariaLabel="three-circles-rotating"
            outerCircleColor=""
            innerCircleColor=""
            middleCircleColor=""
        />
    );
};

export default memo(AudioLoading);
