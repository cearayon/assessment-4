const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment, getName, addShip, deleteShip, updateShip } = require('./controller')

//write endpoints
app.get("/api/compliment", getCompliment);

app.get("/api/name", getName);

app.post("/api/add/ships", addShip)

app.put("/api/update/ships/:id", updateShip)

app.delete("/api/delete/ships/:id", deleteShip)

app.listen(4000, () => console.log("Server running on 4000"));
