import express from "express";
import { join } from "../controllers/userController";
import { trending } from "../controllers/videoController";

const globalRouter = express.Router(); //라우터 생성
const handleHome = (req, res) => res.send("Home");

globalRouter.get("/", handleHome);
globalRouter.get("/", trending);
globalRouter.get("/join", join);

export default globalRouter;