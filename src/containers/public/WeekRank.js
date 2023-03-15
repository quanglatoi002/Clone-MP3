import { useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import { RankList } from "../../components";
import bgChart from "../../assets/week-chart-bg.jpg";
import icons from "../../utils/icon";
import { apiGetChartHome } from "../../apis";
const { BsFillPlayFill } = icons;

const notActiveStyle =
    "text-[24px] text-black uppercase font-bold py-[12px] hover:text-main-500";
const activeStyle =
    "text-[24px] text-main-500 uppercase font-bold xl:py-[12px] py-[10px] border-b-[4px] border-[#0E8080]";
const WeekRank = ({ weekChart }) => {
    //lúc này weekChart được truyền từ App.js
    console.log(weekChart);
    // lấy pid của bài hát
    const { pid } = useParams();
    useEffect(() => {
        console.log(pid);
    }, [pid]);
    console.log(weekChart?.find((item) => item?.link?.includes(pid))?.items);
    return (
        <div className="relative">
            <img
                src={bgChart}
                alt="bg-chart"
                className="w-full h-[500px] object-cover grayscale"
            />
            <div className="absolute top-0 left-0 right-0 bottom-0 bg-[rgba(206,217,217,0.8)]"></div>
            <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-t from-[#CED9D9] to-transparent"></div>
            <div className="absolute top-0 left-0 right-0 bottom-1/2 flex xl:px-[59px] px-[29px] flex-col gap-5 pt-11">
                <div className="flex items-center pt-12 gap-2">
                    <h3 className="font-bold text-[40px] text-main-500 ">
                        Bảng Xếp Hạng Tuần
                    </h3>
                    <span className=" text-white hover:bg-gray-500  p-3 rounded-full bg-main-500">
                        <BsFillPlayFill size={28} />
                    </span>
                </div>
                {/* Ví dụ link
: 
"/zing-chart-tuan/Bai-hat-Viet-Nam/IWZ9Z08I.html"
lúc này chúng ta sẽ tách đoạn code ra thành array có 2 giá trị [0,1]
 */}
                <div className="flex xl:gap-8 gap-4">
                    {weekChart?.map((item) => (
                        <NavLink
                            key={item.chartId}
                            to={item?.link.split(".")[0]}
                            className={({ isActive }) =>
                                isActive ? activeStyle : notActiveStyle
                            }
                        >
                            {item?.country === "vn"
                                ? "Việt Nam"
                                : item?.country === "us"
                                ? "US-UK"
                                : item?.country === "korea"
                                ? "K-Pop"
                                : ""}
                        </NavLink>
                    ))}
                </div>

                <div className="mt-8 w-full">
                    <RankList
                        data={
                            weekChart?.find((item) => item?.link?.includes(pid))
                                ?.items
                        }
                        isHideAlbum={true}
                        number={100}
                    />
                </div>
            </div>
        </div>
    );
};

export default WeekRank;
