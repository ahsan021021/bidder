const mongoose = require("mongoose");
exports.connect = () => {
  mongoose.connect("mongodb+srv://tahirsandh78628:8q7vOIdSys1Lw4Np@bidmanpro.gft0g.mongodb.net/?retryWrites=true&w=majority&appName=bidmanpro", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    authSource: 'admin', // Specifies the database for authentication
  });

  const db = mongoose.connection;
  db.on("error", console.error.bind(console, "connection error:"));
  db.once("open", function () {
    console.log("connected");
  });
};
