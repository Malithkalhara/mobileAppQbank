var mongoose=require('mongoose');


var schema=mongoose.Schema;

let questionSchema=new schema({
    question:{
        type:String
    },
    language:{
        type:String
    },
    answer:String,
    answer2:[String]
});

var question=mongoose.model('question',questionSchema);
module.exports=question;