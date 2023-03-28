import express from "express";
var app = express();

app.get("/", async function (req, res) {
    res.status(200).json({
        status: "running",
    });
});

app.get("/v1/prompt/gpt4", async function (req, res) {
    res.status(200).json({
        status: "running",
    });
});

app.listen(3001);
