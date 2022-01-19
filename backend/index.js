const express = require("express");
const app = express();
require("dotenv").config()
require("./src/db/conn");
const userRoutes = require("./src/routes/Users");
const bodyParser = require("body-parser");
const cors = require("cors")
const path = require("path")
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors())
app.use("/users", userRoutes);
const PORT = process.env.PORT || 5000;

//server production 
if(process.env.NODE_ENV === "production"){
  app.use(express.static(path.join(__dirname, "frontend/build")));
  app.get("*", (req,res)=>{
   res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"))
  })
}
app.listen(PORT, () => {
  console.log(`listening port number ${PORT}`);
});
