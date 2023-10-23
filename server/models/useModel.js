import mongoose from "mongoose";
import JWT from "jsonwebtoken";
import bcrypt from "bcrypt";


const userSchema = new mongoose.Schema({
  name:{
    type: String,
    required: [true, "Please enter your name!"],
  },
  email:{
    type: String,
    required:[true, "Please enter your email!"],
  },
  password:{
    type: String,
    required: [true, "Please enter your password"],
    minLength: [4, "Password should be greater than 4 characters"],
   
    
  },

  role:{
    type: String,
    default: "user",
  },
  avatar:{
   
      type: String,
      required: [true, "Please enter your password"],

 },
 createdAt:{
  type: Date,
  default: Date.now(),
 },

});
userSchema.pre("save", async function (next){
  if(!this.isModified("password")){
    next();
  }

  this.password =await bcrypt.hash(this.password, 10);
});


userSchema.methods.getJwtToken = function () {
  return JWT.sign({ id: this._id}, process.env.JWT_SECRET_KEY,{
    expiresIn: process.env.JWT_EXPIRES,
  });
};
userSchema.methods.comparePassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};
const UserModel=mongoose.model("users", userSchema);

export default UserModel 