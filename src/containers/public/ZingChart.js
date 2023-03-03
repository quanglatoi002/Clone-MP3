import { isBuffer } from "lodash";
import { useEffect, useState, useRef } from "react";
import { apiGetChartHome } from "../../apis";
import bgChart from "../../assets/bg-chart.jpg";
import { Songs, RankList } from "../../components";
import _ from "lodash";
import { Line } from "react-chartjs-2";
import { Chart } from "chart.js/auto";
const ZingChart = () => {
    const [chartData, setChartData] = useState(null);
    console.log(chartData?.weekChart);
    const [data, setData] = useState(null);
    const [tooltip, setTooltip] = useState({
        opacity: 0,
        top: 0,
        left: 0,
    });

    const [tooltipData, setTooltipData] = useState();
    const chatRef = useRef();

    const options = {
        responsive: true,
        pointRadius: 0,
        maintainAspectRatio: true,
        scales: {
            y: {
                ticks: { display: false },
                grid: { color: "rgba(0,0,0,0.3)", drawTicks: false },
                min: chartData?.RTChart?.chart?.minScore,
                max: chartData?.RTChart?.chart?.maxScore,
                border: { dash: [3, 4] },
            },
            x: {
                ticks: { color: "gray" },
                grid: { color: "transparent" },
            },
        },
        plugins: {
            legend: false,
            tooltip: {
                enabled: false,
                external: (ctx) => {
                    const counters = [];
                    for (let i = 0; i < 3; i++)
                        counters.push({
                            encodeId: Object.keys(
                                chartData?.RTChart?.chart?.items
                            )[i],
                            data: chartData?.RTChart?.chart?.items[
                                Object.keys(chartData?.RTChart?.chart?.items)[i]
                            ]
                                ?.filter((item) => +item?.hour % 2 === 0)
                                ?.map((item) => item?.counter),
                        });
                    const tooltipModel = ctx.tooltip;
                    setTooltipData(
                        counters?.find((i) =>
                            i.data?.some(
                                (n) =>
                                    n ===
                                    +tooltipModel?.body[0]?.lines[0]?.replace(
                                        ",",
                                        ""
                                    )
                            )
                        )
                    );

                    if (tooltipModel.opacity === 0) {
                        if (tooltip.opacity !== 0)
                            setTooltip((prev) => ({ ...prev, opacity: 0 }));
                        return;
                    }
                    const newTooltipData = {
                        opacity: 1,
                        left: tooltipModel.caretX,
                        top: tooltipModel.caretY,
                    };
                    if (!_.isEqual(tooltip, newTooltipData))
                        setTooltip(newTooltipData);
                },
            },
        },
        hover: {
            mode: "dataset",
            intersect: false,
        },
    };

    useEffect(() => {
        const petchChartData = async () => {
            const response = await apiGetChartHome();
            if (response?.data.err === 0) setChartData(response.data.data);
        };
        petchChartData();
    }, []);

    useEffect(() => {
        const labels = chartData?.RTChart?.chart?.times

            ?.filter((item) => +item.hour % 2 === 0)
            ?.map((item) => item.hour);
        const datasets = [];
        if (chartData?.RTChart?.chart?.items) {
            for (let i = 0; i < 3; i++) {
                datasets.push({
                    data: chartData?.RTChart?.chart?.items[
                        Object.keys(chartData?.RTChart?.chart?.items)[i]
                    ]
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
    }, [chartData]);

    return (
        <div className="w-full">
            <div className="flex w-full flex-col">
                <div className="relative">
                    <img
                        src={bgChart}
                        alt="bg-chart"
                        className="w-full h-[500px] object-cover grayscale"
                    />
                    <div className="absolute top-0 left-0 right-0 bottom-0 bg-[rgba(206,217,217,0.9)]"></div>
                    <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-t from-[#CED9D9] to-transparent"></div>
                    <div className="absolute top-0 left-0 right-0 bottom-1/2 flex items-center xl:px-[59px] px-[29px]">
                        <h3 className="font-bold text-[40px] text-main-500">
                            #zingchart
                        </h3>
                    </div>
                    <div className="absolute top-1/3 left-0 right-0 bottom-0 xl:px-[59px] px-[29px]">
                        {data && (
                            <Line ref={chatRef} data={data} options={options} />
                        )}
                        <div
                            className="tooltip"
                            style={{
                                top: tooltip.top,
                                left: tooltip.left,
                                position: "absolute",
                                opacity: tooltip.opacity,
                            }}
                        >
                            <Songs
                                thumbnail={
                                    chartData?.RTChart?.items?.find(
                                        (i) => i.encodeId === tooltipData
                                    )?.thumbnail
                                }
                                title={
                                    chartData?.RTChart?.items?.find(
                                        (i) => i.encodeId === tooltipData
                                    )?.title
                                }
                                artists={
                                    chartData?.RTChart?.items?.find(
                                        (i) => i.encodeId === tooltipData
                                    )?.artistsNames
                                }
                                sid={
                                    chartData?.RTChart?.items?.find(
                                        (i) => i.encodeId === tooltipData
                                    )?.encodeId
                                }
                                style={`bg-white`}
                                isChart={true}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="xl:px-[59px] px-[29px] mt-12">
                <RankList data={chartData?.RTChart?.items} number={10} />
            </div>
            <div className="relative">
                <img
                    src={bgChart}
                    alt="bg-chart"
                    className="w-full object-cover grayscale"
                />
                <div className="absolute top-0 left-0 right-0 bottom-0 bg-[rgba(206,217,217,0.9)]"></div>

                <div className="absolute top-0 left-0 right-0 bottom-1/2 mt-8 flex flex-col gap-4 xl:px-[59px] px-[29px]">
                    <h3 className="font-bold text-[40px] text-main-500">
                        Bảng Xếp hạng Tuần
                    </h3>
                    <div className="flex xl:flex-row flex-col gap-4">
                        {chartData?.weekChart &&
                            Object.entries(chartData?.weekChart)?.map(
                                (item, index) => (
                                    <div
                                        className="flex-1 bg-gray-200 px-[10px] py-5"
                                        key={index}
                                    >
                                        <h3 className=" text-[24px] text-main-500 font-bold">
                                            {item[0] === "vn"
                                                ? "Việt Nam"
                                                : item[0] === "us"
                                                ? "US-UK"
                                                : item[0] === "korea"
                                                ? "K-Pop"
                                                : ""}
                                        </h3>

                                        <RankList
                                            data={item[1]?.items}
                                            isHideAlbum={true}
                                            number={5}
                                            link={item[1]?.link}
                                        />
                                    </div>
                                )
                            )}
                    </div>
                </div>
            </div>
            <div className="w-full h-[500px]"></div>
        </div>
    );
};

export default ZingChart;
