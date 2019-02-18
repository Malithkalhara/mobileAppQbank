var express = require('express');
var router = express.Router();
var bcrypt = require('bcrypt');
var user=require('../models/user.model');
var config=require('../config');
var jwt = require('jsonwebtoken');


router.get('/',(req,res)=>{
  user.findOne({regno: req.query.regno}).then(user=>{
    console.log(req.query.regno);
    res.json({status:"200",msg:"USER_FIND_SUCCESSFULLY",data:user});
  }).catch(err=>{
    res.json({status:"400",msg:"USER_NOT_FOUND"});
  })
})

/* GET users listing. */
router.get('/all',(req,res)=>{
  user.find().then(data=>{
    res.json({status:"200",msg:"USER_FIND_SUCCESSFULLY",data:data});
  }).catch(err=>{
    res.json({status:"400",msg:"USER_NOT_FOUND"});
  })
})

router.post('/authenticate', (req, res) => {
  // find the user
  user.findOne({
    regno: req.body.regno
  }).then(userNew => {
    if (!userNew) {
      res.status(400).json({ message: 'Authentication failed. Invalid Society username.' });
    } else {
      // check if password matches
      bcrypt.compare(req.body.password, userNew.password, (err, validity) => {
        if (!validity) {
          return res.status(400).json({ message: 'Authentication failed. Wrong password.' });
        } else {
          // if society is found and password is right
          // create a token with only our given payload
          // we don't want to pass in the entire society since that has the password
          const payload = {
            regno: userNew.regno,
            name: userNew.name,
            role:userNew.role,
            status:userNew.astatus
          };
          var token = jwt.sign(payload, config.secret, {
            expiresIn: 3600 // expires in 24 hours
          });
          // return the information including token as JSON
          res.status(200).json({
            data: payload,
            token: token
          });
        }
      });
    }
  }).catch(err => {
    res.status(400).json({ message: err });
  });
});

router.post('/add',(req,res)=>{
  let userNew=new user(req.body);
  bcrypt.hash(req.body.password,12).then(hashPass=>{
    userNew.password=hashPass
    userNew.save().then(data=>{
      res.json({status:"200",msg:"USER_ADDED_SUCCESSFULLY"});
    }).catch(err=>{
      res.json({status:"400",msg:"USER_ADDED_FAILED"})
    })
  })
})

router.post('/delete',(req,res)=>{
  user.findOneAndDelete({regno:req.body.regno}).then(data=>{
    console.log(req.body.regno)
    res.json({status:"200",msg:"USER_DELETED",data:data});
  }).catch(err=>{
    res.json({status:"400",msg:"USER_NOT_DELETED"});
  })
})

router.post('/update',(req,res)=>{
  user.findOneAndUpdate({regno:req.body.regno},{
    astatus:req.body.status}).then(data=>{
      res.json({status:"200",msg:"USER_ACTIVATED",data:data});
    }).catch(err=>{
      res.json({status:"400",msg:"USER_ACTIVATED_FAILED"});
    })
})

module.exports = router;
