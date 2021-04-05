// ONE
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const app = express();

app.use(morgan("tiny"));
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const residentRoutes = require("./app/routes/orders.routes");
const authRoutes = require("./app/routes/client.routes");

// App Routes
app.use("/api/v1/residents", residentRoutes);
app.use("/api/v1/auth", authRoutes);
app.get("/", (req, res) => {
  res.send("Welcome to Customer Security & Orders API");
});

const port = process.env.PORT || 8088;

app.listen(port, function () {
  console.log(`Server listening on port ${port}`);
});
