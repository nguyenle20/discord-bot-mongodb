const express = require("express");
const app = express();
const routes = require("./routes/index");
const mongoose = require("mongoose");

app.use(express.json());

//routes
app.use("/api", routes);

(async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Connected to DB.");
  } catch (err) {
    console.log(`Error ${err}`);
  }
})();

app.listen(3000, () => {
  console.log(`Server is running at ${3000}`);
});
