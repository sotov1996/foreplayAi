const express = require("express");
require("dotenv").config();
const cors = require("cors");

const routesV1 = require("./routes/v1");
const routesV2 = require("./routes/v2");

const { mongoConnect } = require("#utils/dbConnect.js");

const { NODE_PORT } = process.env

const app = express();

app.use(express.json());
app.use(cors());

(async () => { await mongoConnect() })();

app.use("/api/v1", routesV1.user);
app.use("/api/v1", routesV1.openai);
app.use("/api/v1", routesV1.mood);

app.use("/api/v2", routesV2.user);
app.use("/api/v2", routesV2.openai);
app.use("/api/v2", routesV2.mood);

app.listen(NODE_PORT, () => console.log(`Listening on port ${NODE_PORT}`));
