const express = require("express");
const app = express();
const userRoutes = require("./routes/userRoutes");
const dotenv = require("dotenv");
const cors = require("cors");
const mangoose = require("mongoose");
dotenv.config();

mangoose.connect(process.env.DATABASE_URL, () =>
  console.log("database Connected")
);
app.use(express.json());
app.use(cors());

app.get("/", (request, response) => {
  response.send("API is running.");
});

app.use("/api/users", userRoutes);

const port = process.env.PORT || 7000;

app.listen(port, console.log("Servere connected"));
