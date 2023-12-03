const express = require("express");
require("dotenv").config();
const cors = require("cors");

const openai = require("./routes/openai");
const user = require("./routes/user");
const mood = require("./routes/mood");

const { mongoConnect } = require("./utils/dbConnect");

const { NODE_PORT } = process.env

const app = express();

app.use(express.json());
app.use(cors());

(async () => { await mongoConnect() })();

app.use("/api/v1", user);
app.use("/api/v1", openai);
app.use("/api/v1", mood);

app.listen(NODE_PORT, () => console.log(`Listening on port ${NODE_PORT}`));
