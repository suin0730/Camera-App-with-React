const express = require("express");
const bodyParser = require("body-parser");
const multer = require("multer");
const upload = multer({
    dest: "uploads/",
});

const app = express();

app.use(express.static(__dirname + "/../forweb/build"));
app.use(
    bodyParser.urlencoded({
        extended: false,
    })
);
app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.redirect("/index.html");
});

app.post("/uploadAPI", upload.single("fileUploadTest"), (req, res) => {
    console.log(req.file);
    res.redirect("/");
});

app.get("/help", (req, res) => {
    res.send("help");
});

app.listen(4000, () => {
    console.log("4000번 포트 서버 실행");
});