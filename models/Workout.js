var mongoose=require("mongoose");
var Schema=mongoose.Schema;
var WorkoutSchema=new Schema({
    title:{
    type: String,
    required:true,
    },
    type:{
        type:String,
        requried:true,
    },
    description:{
        type:String,
        required:true,
    },
   cover:{
    type:String,
   } ,
   category:{
    type:String,
    required:true,
   },
   isDeleted:{
    type:Boolean,
    default:false,
   },
   createdBy:{
    type:Schema.Types.ObjectId,
    ref:"Admins",
   },
   created:{
    type:Date,
    default:Date.now(),
   },
   updated:{
    type:Date,
    default:Date.now(),
   },
});
module.exports=mongoose.model("Workouts",WorkoutSchema);