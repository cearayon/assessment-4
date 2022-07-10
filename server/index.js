const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment, getName, addShip, deleteShip, updateShip } = require('./controller')

app.get("/api/compliment", getCompliment);

app.get("/api/name", getName);

app.post("/api/name", addShip)

app.put("/api/ships:id", updateShip)

app.delete("/api/ships:id", deleteShip)

app.listen(4000, () => console.log("Server running on 4000"));
