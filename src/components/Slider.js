import { useSelector } from "react-redux";
import React from "react";
const Slider = () => {
    const { banner } = useSelector((state) => state.app);
    console.log(banner);
    return (
        <div className="flex flex-col">
            {banner?.map((item) => (
                <img
                    key={item.encodeId}
                    src={item.banner}
                    alt="banner"
                    className="w-full h-auto"
                />
            ))}
        </div>
    );
};

export default Slider;
