import { memo, useState, useEffect, useRef } from "react";
import { Line } from "react-chartjs-2";
import { Chart } from "chart.js/auto";
import { useSelector } from "react-redux";
import { Songs } from "./";
//
import bgChart from "../assets/bg-chart.jpg";
const ChartSection = () => {
    const [data, setData] = useState(null);
    const { chart, rank } = useSelector((state) => state.app);
    const [tooltip, setTooltip] = useState({
        opacity: 0,
        top: 0,
        left: 0,
    });
    const chatRef = useRef();
    const options = {
        responsive: true,
        pointRadius: 0,
        maintainAspectRatio: true,
        scales: {
            y: {
                ticks: { display: false },
                grid: { color: "rgba(255,255,255,0.2)", drawTicks: false },
                min: chart?.minScore,
                max: chart?.maxScore,
                border: { dash: [3, 4] },
            },
            x: {
                ticks: { color: "white" },
                grid: { color: "transparent" },
            },
        },
        plugins: {
            legend: false,
            tooltip: {
                enabled: false,
            },
        },
        hover: {
            mode: "dataset",
            intersect: false,
        },
    };
    useEffect(() => {
        const labels = chart?.times
            ?.filter((item) => +item.hour % 2 === 0)
            ?.map((item) => item.hour);
        const datasets = [];
        if (chart?.items) {
            for (let i = 0; i < 3; i++) {
                datasets.push({
                    data: chart?.items[Object.keys(chart?.items)[i]]
                        ?.filter((item) => +item.hour % 2 === 0)
                        ?.map((item) => item.counter),
                    borderColor:
                        i === 0 ? "#4a90e2" : i === 1 ? "#50e3c2" : "#e35050",
                    tension: 0.3,
                    borderWidth: 2,
                    pointHoverRadius: 5,
                    pointBackgroundColor: "white",
                    pointHitRadius: 5,
                    pointBorderColor:
                        i === 0 ? "#4a90e2" : i === 1 ? "#50e3c2" : "#e35050",
                    animation: false,
                    pointHoverBorderWidth: 5,
                });
            }
            setData({ labels, datasets });
        }
    }, [chart]);
    return (
        <div className="mt-12 px-[59px] relative min-h-[550px] lg:min-h-[350px]">
            <img
                src={bgChart}
                alt="bg-chart"
                className="w-full min-h-[550px] lg:min-h-[350px] object-cover rounded-md"
            />
            <div className="absolute z-10 top-0 left-[59px] right-[59px] bottom-0 bg-[rgba(77,34,104,0.9)] "></div>
            <div className="absolute z-20 top-0 left-[59px] right-[59px] bottom-0 p-5 gap-8">
                <h3 className="text-2xl text-white font-bold mb-5">
                    #zingchart
                </h3>
                <div className="flex flex-col-reverse xl:flex-row gap-4">
                    <div className="xl:flex-4 flex flex-col gap-4">
                        {rank.items &&
                            rank.items
                                ?.filter((i, index) => index < 3)
                                ?.map((item, index) => (
                                    <Songs
                                        order={index + 1}
                                        percent={Math.round(
                                            (+item.score * 100) /
                                                +chart?.totalScore
                                        )}
                                        data={item}
                                        key={item.encodeId}
                                    />
                                ))}
                    </div>

                    <div className="xl:flex-6 h-full">
                        {data && (
                            <Line ref={chatRef} data={data} options={options} />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default memo(ChartSection);
