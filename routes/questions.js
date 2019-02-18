var express = require('express');
var router = express.Router();
var question=require('../models/question.model');

router.post('/add',(req,res)=>{
  let quesNew=new question(req.body);
  quesNew.save().then(data=>{
    res.json({status:"200",msg:"QUESTION_ADDED_SUCCESSFULLY"});
  }).catch(err=>{
    res.json({status:"400",msg:"QUESTION_ADDED_FAILED"})
  })
})

router.get('/',(req,res)=>{
  question.find({}).then(data=>{
    res.json(data);
  }).catch(err=>{
    console.log(err);
    res.json({status:"400",msg:"QUESTIONS_NOT_FOUND"});
  })
})

router.post('/delete',(req,res)=>{
  question.findOneAndDelete({_id:req.body.id}).then(data=>{
    res.json({status:"200",msg:"QUESTION_DELETED_SUCCESSFULLY"});
  }).catch(err=>{
    res.json({status:"400",msg:"QUESTION_DELETED_FAILED"})
  })
})

module.exports = router;
