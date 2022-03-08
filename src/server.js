import express from "express";
import morgan from "morgan";
const PORT = 4000
const app = express(); //application 생성

const logger = morgan("dev")

const handleHome = (req, res) => {
    return res.send("I love Middlewares!");
    //next는 다음 함수를 호출한다.
};

const handleLogin = (req, res) => {
    return res.send("Hello login!")
}

app.use(logger) //순서는 여기에서 중요하다!
app.get("/", handleHome) //누군가 /으로 request를 보내면, callback해주겠다는 뜻.
app.get("/login", handleLogin) //누군가 /으로 request를 보내면, callback해주겠다는 뜻.

const handleListening = () => console.log(`✅ Server listening on port http://localhost:${PORT} 🚀`)

app.listen(PORT, handleListening) //뒤에가 callback. listen 생성