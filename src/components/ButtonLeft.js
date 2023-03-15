import { memo } from "react";
import { Button } from "./";
const ButtonLeft = ({ buttonLeft, info, bgColor }) => {
    return (
        <div
            className={`${bgColor} py-[15px] px-[8px] border rounded-lg text-xs flex items-center text-center flex-col justify-center text-white`}
        >
            <span className="text-[12px] font-semibold mb-[10px]">{info}</span>

            <Button text={buttonLeft} />
        </div>
    );
};

export default memo(ButtonLeft);
