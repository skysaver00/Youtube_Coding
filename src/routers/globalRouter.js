import express from "express";

const globalRouter = express.Router(); //라우터 생성
const handleHome = (req, res) => res.send("Home");
globalRouter.get("/", handleHome);

export default globalRouter