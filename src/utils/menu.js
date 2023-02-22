import icons from "./icon";
import { zSVG, kSVG, tSVG } from "../SVG/listSVG";
const { MdOutlineLibraryMusic } = icons;
export const sidebarMenu = [
    {
        path: "mymusic",
        text: "Cá nhân",
        icons: <MdOutlineLibraryMusic size={"24px"} />,
    },
    {
        path: "",
        text: "Khám phá",
        icons: zSVG,
    },
    {
        path: "zing-chart",
        text: "#zingchart",
        icons: kSVG,
    },
    {
        path: "follow",
        text: "Theo dõi",
        icons: tSVG,
    },
];

export const searchMenu = [
    {
        path: "tat-ca",
        text: "Tất cả",
    },
    {
        path: "bai-hat",
        text: "Bài hát",
    },
    {
        path: "playlist",
        text: "PLAYLIST/ALBUM",
    },
];
