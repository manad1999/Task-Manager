const {connectDB}  =require("./db/connect");
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const tasks = require('./Routes/tasks');
require('dotenv').config()

app.use(express.static("./public"));
app.use(express.json());
//routers
app.use("/api/v1/tasks", tasks);
const port = 5000;

const start = async() => {

    try{
        await connectDB(process.env.MONGO_URI)
        app.listen(port, () => console.log(`Server is on ${port}`))
        

    }
    catch(err)
    {
        console.log(err);
    }

}

start();

