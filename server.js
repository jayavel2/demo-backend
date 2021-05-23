const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 3001;
const DB_URL= "mongodb+srv://jayavel:Jayavelmongodb@123@cluster0.6elew.mongodb.net/jayavel?retryWrites=true&w=majority";
app.use('/api/userModel',require('./API/User'))
console.log("----------------",PORT,DB_URL)
mongoose.connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  }).then(() => {
    console.log("Successfully connected to the database");
  }).catch(err => {
      console.log('Could not connect to the database. Exiting now...', err);
      process.exit();
  });


app.get('/jayavel' ,function(req,res){
    res.send("hii")
})
app.listen(PORT);
  
// app.listen(3001)