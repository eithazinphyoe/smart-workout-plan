var mongoose=require('mongoose');
var Schema=mongoose.Schema;
var bcrypt=require("bcryptjs");
var AdminSchema=new Schema({
    name:{
        type:String,
        require:true,
    },
    email:{
        type:String,
        require:true,
    },
    password:{
        type:String,
        require:true,
    },
});
AdminSchema.pre("save",function(next){
    this.password=bcrypt.hashSync(this.password,bcrypt.genSaltSync(8),null);
    next();
});
AdminSchema.statics.compare=function(cleartext,encrypted){
    return bcrypt.compareSync(cleartext,encrypted);
};
module.exports=mongoose.model("Admins",AdminSchema);