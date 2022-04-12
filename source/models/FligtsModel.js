import flights from "../data/flights.js";

export async function getAllFlights() {
    return new Promise((resolve, reject) => {
        resolve(flights);
    });
}
