import { getAllFlights } from "../models/FligtsModel.js";

export async function getAll(req, res) {
    return new Promise(async (resolve, reject) => {
        const allFlights = await getAllFlights();
        resolve(allFlights);

        // res.writeHead(200, { "Content-Type": "application/json" });
        // const x = req.end(JSON.stringify(allFlights));
        // resolve(req.end(allFlights));

        // reject("Deu bosta !!!!!!!");
    });
}
