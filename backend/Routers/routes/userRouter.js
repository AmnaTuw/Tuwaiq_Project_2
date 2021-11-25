const express = require("express");

const userRouter = express.Router();

const {getUser,getAllUser,updateUser,addNewUser,getPersonInfo} = require("../controllers/user");
const { users } = require("../db");


userRouter.get('/',getAllUser);
userRouter.post('/:id',getPersonInfo);
userRouter.post('/',getUser);
userRouter.post('/user',addNewUser);
userRouter.put('/user',updateUser);

module.exports={userRouter};