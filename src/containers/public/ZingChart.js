import { isBuffer } from "lodash";
import { useEffect, useState, useRef } from "react";
import { apiGetChartHome } from "../../apis";
import bgChart from "../../assets/bg-chart.jpg";
import { SongItem } from "../../components";
import _ from "lodash";
import { Line } from "react-chartjs-2";
import { Chart } from "chart.js/auto";
const ZingChart = () => {
    const [chartData, setChartData] = useState(null);
    const [data, setData] = useState(null);
    const [tooltip, setTooltip] = useState({
        opacity: 0,
        top: 0,
        left: 0,
    });
    const [tooltipData, setTooltipData] = useState(null);
    const chatRef = useRef();
    const options = {
        responsive: true,
        pointRadius: 0,
        maintainAspectRatio: true,
        scales: {
            y: {
                ticks: { display: false },
                grid: { color: "rgba(255,255,255,0.2)", drawTicks: false },
                min: chartData?.RTChart?.chart?.minScore,
                max: chartData?.RTChart?.chart?.maxScore,
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
                external: ({ ctx }) => {
                    const data = [];
                    for (let i = 0; i < 3; i++)
                        data.push({
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
                        data.find((i) =>
                            i.data?.some(
                                (n) =>
                                    n ===
                                    +tooltipModel?.body[0]?.lines[0]?.replace(
                                        ",",
                                        ""
                                    )
                            )
                        )?.encodeId
                    );
                    console.log(tooltipData);

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
        console.log(labels);
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

    console.log(data);
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
                    <div className="xl:flex-6 top-0 left-0 right-0 bottom-0">
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
                            {/* <Songs
                                thumbnail={
                                    rank?.find(
                                        (i) => i.encodeId === tooltipData
                                    )?.thumbnail
                                }
                                title={
                                    rank?.find(
                                        (i) => i.encodeId === tooltipData
                                    )?.title
                                }
                                artists={
                                    rank?.find(
                                        (i) => i.encodeId === tooltipData
                                    )?.artistsNames
                                }
                                sid={
                                    rank?.find(
                                        (i) => i.encodeId === tooltipData
                                    )?.encodeId
                                }
                                style={`bg-white`}
                                isChart={true}
                            /> */}
                        </div>
                    </div>
                </div>
            </div>
            <div className="xl:px-[59px] px-[29px]">zing chart</div>
        </div>
    );
};

export default ZingChart;
