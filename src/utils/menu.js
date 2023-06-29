import icons from "./icon";
import { zSVG, kSVG, tSVG } from "../SVG/listSVG";
const {
    MdOutlineLibraryMusic,
    FiMusic,
    BiCategory,
    AiOutlineStar,
    BiVideoOff,
    MdOutlineTopic,
    RiVipFill,
    FiSettings,
    RxAvatar,
} = icons;

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
    // {
    //     path: "follow",
    //     text: "Theo dõi",
    //     icons: tSVG,
    // },
];

export const sidebarNextMenu = [
    {
        // path: "moi-phat-hanh",
        text: "Nhạc mới",
        icons: <FiMusic size={"24px"} />,
    },
    {
        // path: "hub",
        text: "Thể Loại",
        icons: <BiCategory size={"24px"} />,
    },
    {
        // path: "Top 100",
        text: "top100",
        icons: <AiOutlineStar size={"24px"} />,
    },
    {
        // path: "",
        text: "MV",
        icons: <BiVideoOff size={"24px"} />,
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

export const searchMenuLeft = [
    {
        path: "ĐĂNG NHẬP",
        text: "Đăng nhập để khám phá playlist dành riêng cho bạn",
    },
    {
        path: "NÂNG CẤP VIP",
        text: "Nghe nhạc không quảng cáo cùng kho nhạc VIP",
    },
];

export const headerRight = [
    {
        path: "moi-phat-hanh",
        text: "Chủ đề",
        icons: <MdOutlineTopic size={"20px"} />,
    },
    {
        path: "hub",
        text: "Nâng cấp VIP",
        icons: <RiVipFill size={"20px"} />,
    },
    {
        path: "Top 100",
        text: "Cài đặt",
        icons: <FiSettings size={"20px"} />,
    },
    {
        path: "",
        text: "Đăng nhập",
        icons: <RxAvatar size={"20px"} />,
    },
];
