import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { apiGetChartHome } from "../../apis";
const WeekRank = ({ weekChart }) => {
    console.log(weekChart);
    const { pid } = useParams();
    useEffect(() => {
        console.log(pid);
    }, [pid]);
    return (
        <div>
            <div className="w-full h-[90px]"></div>
            <div>weekChart</div>
        </div>
    );
};

export default WeekRank;
