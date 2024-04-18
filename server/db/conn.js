const { MongoClient } = require("mongodb");
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
require("dotenv").config();

const client = mongoose
  .connect(process.env.MONGO_URI || 'mongodb+srv://burhanazeem159357:tit2b1116nKKNmiF@emergealerts.zpzombc.mongodb.net/?retryWrites=true&w=majority&appName=EmergeAlerts', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("DB connected");
  })
  .catch((error) => {
    console.log("Error: ", error);

    return error;
  });

module.exports = client;
