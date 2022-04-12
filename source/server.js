import { createServer } from "http";
import { getAll } from "./controllers/FligthsController.js";

const server = createServer(async (req, res) => {
    if (req.url === "/flights" && req.method === "GET") {
        res.writeHead(200, { "Content-Type": "application/json" });
        const data = await getAll();
        res.end(JSON.stringify(data));
    } else {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end("<h1>OLA, WEB!</h1>");
    }
});

const PORT = 5000;

server.listen(PORT, () => {
    console.log(`Ouvindo a porta ${PORT}`);
});
