import { useSelector } from "react-redux";
import React from "react";
const Slider = () => {
    const { banner } = useSelector((state) => state.app);
    return (
        <div className="flex flex-col">
            {banner.items?.map((item) => (
                <img
                    key={item.encodeId}
                    src={item.banner}
                    alt="banner"
                    className="flex-1 object-cover"
                />
            ))}
        </div>
    );
};

export default Slider;
