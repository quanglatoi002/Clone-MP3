import { useSelector, useDispatch } from "react-redux";
import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
//
import { getArrSlider } from "../utils/fn";
import * as actions from "../store/actions";
import { Button } from "./";
import icons from "../utils/icon";

const { MdArrowBackIosNew, MdNavigateNext, MdOutlineNavigateNext } = icons;

var intervalId;
const Slider = () => {
    const { banner, currentWidth } = useSelector((state) => state.app);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [min, setMin] = useState(0);
    const [max, setMax] = useState(2);
    const [isAuto, setIsAuto] = useState(true);

    // useEffect(() => {
    //     setMax(() => (currentWidth < 900 ? 1 : 2));
    // }, [currentWidth, max]);
    // console.log(max);
    //animation
    useEffect(() => {
        if (isAuto) {
            intervalId = setInterval(() => {
                handleAnimationBanner(1);
            }, 3000);
        }
        return () => {
            intervalId && clearInterval(intervalId);
        };
    }, [min, max, isAuto, currentWidth]);

    const handleClickBanner = (item) => {
        if (item?.type === 1) {
            dispatch(actions.setCurSongId(item.encodeId));
            dispatch(actions.play(true));
            dispatch(actions.setPlaylist(null));
        } else if (item?.type === 4) {
            dispatch(actions.playAlbum(true));
            const albumPath = item?.link?.split(".")[0];
            navigate(albumPath);
        } else {
            dispatch(actions.setPlaylist(null));
        }
    };
    const handleBlack = useCallback(
        (step) => {
            intervalId && clearInterval(intervalId);
            setIsAuto(false);
            handleAnimationBanner(step);
        },
        [min, max]
    );

    const handleAnimationBanner = (step) => {
        const sliderEls = document.getElementsByClassName("slider-item");
        const list = getArrSlider(min, max, sliderEls.length - 1);
        for (let i = 0; i < sliderEls.length; i++) {
            sliderEls[i]?.classList?.remove(
                "animate-slide-right",
                "order-last",
                "z-20"
            );
            sliderEls[i]?.classList?.remove(
                "animate-slide-left",
                "order-first",
                "z-10"
            );
            sliderEls[i]?.classList?.remove(
                "animate-slide-left2",
                "order-2",
                "z-10"
            );

            if (list.some((item) => item === i)) {
                sliderEls[i].style.cssText = `display: block`;
            } else {
                sliderEls[i].style.cssText = `display: none`;
            }
        }
        list.forEach((item) => {
            if (item === max) {
                sliderEls[item]?.classList?.add(
                    "animate-slide-right",
                    "order-last",
                    "z-20"
                );
            } else if (item === min) {
                sliderEls[item]?.classList?.add(
                    "animate-slide-left",
                    "order-first",
                    "z-10"
                );
            } else {
                sliderEls[item]?.classList?.add(
                    "animate-slide-left2",
                    "order-2",
                    "z-10"
                );
            }
        });

        if (step === 1) {
            setMin((prev) => (prev === sliderEls.length - 1 ? 0 : prev + step));
            setMax((prev) => (prev === sliderEls.length - 1 ? 0 : prev + step));
        }
        if (step === -1) {
            setMin((prev) => (prev === 0 ? sliderEls.length - 1 : prev + step));
            setMax((prev) => (prev === 0 ? sliderEls.length - 1 : prev + step));
        }
    };

    return (
        <div
            className="w-full relative overflow-hidden
    "
        >
            <Button
                handleOnClick={() => handleBlack(1)}
                icon={<MdArrowBackIosNew size={14} />}
                style={`absolute top-1/2 left-[40px] bg-[rgba(255,255,255,0.3)] text-white z-50 p-4 rounded-full`}
            />
            <Button
                handleOnClick={() => handleBlack(-1)}
                icon={<MdOutlineNavigateNext size={24} />}
                style={`absolute top-1/2 right-[40px] bg-[rgba(255,255,255,0.3)] text-white z-50 p-3 rounded-full`}
            />
            <div
                onMouseLeave={() => setIsAuto(true)}
                className="flex relative w-full gap-5 px-4 pt-8"
            >
                {banner.items?.map((item, index) => (
                    <img
                        key={item.encodeId}
                        src={item.banner}
                        alt="banner"
                        onClick={() => handleClickBanner(item)}
                        className={`slider-item flex-1 object-cover slider_width
                         rounded-lg

                        
                        ${index <= 2 ? "block" : "hidden"} 
                `}
                    />
                ))}
            </div>
        </div>
    );
};

export default Slider;
