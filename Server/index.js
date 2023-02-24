const path = require("path");
const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
console.log(process.env.PORT);
const port = process.env.PORT || 8888;

// Page Home
app.get("/", (req, res) => {
    res.send("SERVER ON");
});
// ZingMp3Router
const ZingMp3Router = require("./routers/api/ZingRouter");
app.use("/api", cors({ origin: process.env.URL_CLIENT }), ZingMp3Router);

// Page Error
app.get("*", (req, res) => {
    res.send("Nhập Sai Đường Dẫn! Vui Lòng Nhập Lại >.<");
});

app.listen(port, () => {
    console.log(`Start server listen at http://localhost:${port}`);
});
