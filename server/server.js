const express = require("express");
const cors = require("cors");
const mongoose = require('mongoose')

require("dotenv").config({ path: "./config.env" });

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const adminfile = require("./routes/adminfile")

app.use('/adminfile', adminfile)

const uri = process.env.ATLAS_URI
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })

// get driver connection
// const dbo = require("./db/conn");

const connection = mongoose.connection
connection.once('open', () => {
  console.log('MongoDB database connection established successfully')
})
 
app.listen(port, () => {
  // perform a database connection when server starts
  console.log(`Server is running on port: ${port}`);
});