import express from "express";
const app = express(); //application 생성

const handleHome = (req, res) => {
    return res.send("<h1>I still love you</h1>");
};

const handleLogin = (req, res) => {
    return res.send({ message: "Login here." })
}

app.get("/", handleHome) //누군가 /으로 request를 보내면, callback해주겠다는 뜻.
app.get("/login", handleLogin) //누군가 /으로 request를 보내면, callback해주겠다는 뜻.

const PORT = 4000
const handleListening = () => console.log(`✅ Server listening on port http://localhost:${PORT} 🚀`)

app.listen(PORT, handleListening) //뒤에가 callback. listen 생성