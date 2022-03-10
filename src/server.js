import express from "express";
import morgan from "morgan";
const PORT = 4000
const app = express(); //application 생성

const logger = morgan("dev")
app.use(logger);

const globalRouter = express.Router(); //라우터 생성

const handleHome = (req, res) => res.send("Home");
globalRouter.get("/", handleHome);

const userRouter = express.Router();

const handleEditUser = (req, res) => res.send("Edit User");
userRouter.get("/edit", handleEditUser)

const videoRouter = express.Router();

const handleWatchVideo = (req, res) => res.send("Watch Video");
videoRouter.get("/watch", handleWatchVideo)

app.use("/", globalRouter);
app.use("/videos", videoRouter);
app.use("/users", userRouter);


const handleLogin = (req, res) => {
    return res.send("Hello login!")
}

const handleListening = () => console.log(`✅ Server listening on port http://localhost:${PORT} 🚀`)

app.listen(PORT, handleListening) //뒤에가 callback. listen 생성