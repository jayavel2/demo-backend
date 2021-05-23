const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT =process.env.PORT;


// mongoose.connect("", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useCreateIndex: true,
//   }).then(() => {
//     console.log("Successfully connected to the database");
//   }).catch(err => {
//       console.log('Could not connect to the database. Exiting now...', err);
//       process.exit();
//   });


app.get('/jayavel' ,function(req,res){
    res.send("hii")
})
app.listen(PORT);
  
// app.listen(3001)