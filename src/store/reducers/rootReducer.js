import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";

import appReducer from "./appReducer";
import musicReducer from "./musicReducer";

import { encryptTransform } from "redux-persist-transform-encrypt";

const encryptForm = encryptTransform({
    secretKey: process.env.REACT_APP_SECRET_KEY,
});

const commonConfig = {
    storage,
    stateReconciler: autoMergeLevel2,
};

const musicConfig = {
    ...commonConfig,
    key: "music",
    whitelist: [
        "curSongId",
        "curSongData",
        "curAlbumId",
        "recentSongs",
        "isCheck",
    ],
    transforms: [encryptForm],
};

const rootReducer = combineReducers({
    app: appReducer,
    music: persistReducer(musicConfig, musicReducer),
});

export default rootReducer;
