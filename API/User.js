const express =require('express');
const mongoose=require('mongoose');
const User =require('../DB/user');
const route=express.Router();

route.post('/', async  (req,res)=>{
    const {firstname,lastname}=req.body;
    let user={};
    user.firstname=firstname;
    user.lastname=lastname;
    let userModel =new User(user);
    await userModel.save();
    res.json(userModel);

})

module.exports = route;