const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
//require swagger
const swaggerUI = require("swagger-ui-express");
swaggerDocument = require("./swagger.json");

dotenv.config();

//connect to db
mongoose
  .connect(process.env.CONNECTION_URI, {
    useFindAndModify: false,
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => console.log("DB Connected"))
  .catch((err) => console.log(err));

const PORT = process.env.PORT || 8081;
app.use(cors());
app.use(bodyParser.json({ extended: false }));

//routes
app.get("/", (req, res) => res.send("Hello from Express"));
app.use("/", require("./routes/route"));
app.use("/memes", require("./routes/route"));

//use swagger
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocument));

//server
app.listen(PORT, () => console.log(`Server running at ${PORT}`));
