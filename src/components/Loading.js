import { Triangle } from "react-loader-spinner";
import { memo } from "react";

const Loading = () => {
    return (
        <div>
            <Triangle
                height="80"
                width="80"
                color="#4fa94d"
                ariaLabel="triangle-loading"
                wrapperStyle={{}}
                wrapperClassName=""
                visible={true}
            />
        </div>
    );
};

export default memo(Loading);
