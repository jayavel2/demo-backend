const express = require('express');
const mongoose = require('mongoose');
const app = express();
const User = require('./DB/user');
const URI ="";
const Port = process.env.Port || 3000;

const connectDB = async () => {
  await mongoose.connect(URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true
  });
  console.log('db connected..!');
};

connectDB();

app.use(express.json({ extended: false }));

app.get('/', function(req,res){
 res.send("api running") 
}
 )

app.post('/name', async (req, res) => {
    const { firstname, lastname } = req.body;
    let user = {};
    user.firstname = firstname;
    user.lastname = lastname;
    console.log(user);
    let userModel = new User(user);
    await userModel.save();
    res.json(userModel);
  });

app.listen(Port, () => console.log('Server started'));
