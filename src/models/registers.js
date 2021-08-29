const mongoose = require("mongoose");

 const employeeSchema = new mongoose.Schema({

first :{
    type:String,
    required:true
},
last :{
    type:String,
    required:true
},
address :{
    type:String,
    required:true
},

email:{
    type:String,
    required:true,
    unique:true
},
gender:{
    type:String,
    required:true
},
phone:{
    type:Number,
    required:true,
    unique:true
},
age:{
    type:Number,
    required:true
},
password:{
    type:String,
    required:true,
    unique:true
},
confirmpassword:{
    type:String,
    required:true,
    unique:true
}
 })


 //noe we have to define collections

 const Register = new mongoose.model("Register", employeeSchema);

 module.exports = Register;