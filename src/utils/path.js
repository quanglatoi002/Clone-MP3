//note: để dấu ":" trong album/:title/:pid để cho react-router-dom nó hiểu đó là params
const path = {
    PUBLIC: "/*",
    HOME: "",
    LOGIN: "login",
    STAR: "*",
    MY_MUSIC: "mymusic",
    ALBUM__TITLE__PID: "album/:title/:pid",
};

export default path;
