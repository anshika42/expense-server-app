const User = require("../../model/User");
const expressAsyncHandler = require('express-async-handler');

// register
const registerUser = expressAsyncHandler(async (req, res) => {

  const { email, firstname, lastname, password } = req.body; 

  // check if user exits
  try{
  const userExits = await User.findOne({ email:email});     //email is the name and :email is the original email
  if (userExits) 
  {
    return res.status(422).json({error:'Email already exits'});
  }
    const user =  new User({ email, firstname, lastname, password });
   
    //middleware -password convertor
    await user.save();
    res.status(201).json({msg:"user registered successfully"});
  }
   catch (error) {
    res.json(error);
  }
});

// fetch all users

const fetchUsersCtrl = expressAsyncHandler(async(req,res)=>{
  try{
    const users = await User.find({});
    res.json(users);
  }
  catch(err){
    res.json(err);
  }
});

module.exports = { registerUser,fetchUsersCtrl};
