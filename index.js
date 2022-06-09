import http from "http";
import { runApp } from "./app.js";

const hostname = "127.0.0.1";
const port = process.env.port || 3000;

const server = http.createServer();

server.on("request", async (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Request-Method", "*");
    res.setHeader("Access-Control-Allow-Methods", "*");
    res.setHeader("Access-Control-Allow-Headers", "*");

    const data = await runApp();
    res.end(JSON.stringify(data));
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
