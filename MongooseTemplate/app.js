const app = require("express")();
const dotenv = require("dotenv");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
dotenv.config();
const PORT = process.env.PORT;
const mongodb_url = process.env.MONGODB_URL;
app.listen(PORT, () => {
  console.log(`Server started on the port ${PORT}`);
});
try
{
mongoose.connect(mongodb_url);
console.log("Connection established successfullly")
}
catch(err)
{
    console.log(err)
}
