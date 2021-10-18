const express=require('express');
const router=express.Router();
const mongoose=require('mongoose');
const User = require('../model/user');

router.get('/',(req,res,next)=>{
    User.find()
    .then(result=>{
        res.status(200).json({
            studentData:result
        });
    })

    .catch(err=>{
        console.log(err);
        res.status(500).json({
            error:err
        });
    })
})

router.post('/',(req,res,next)=>{
    const user=new User({
        _id:new mongoose.Types.ObjectId,
        name:req.body.name,
        gender:req.body.gender,
        email:req.body.email,
        number:req.body.number
    })


    user.save()
    .then(result=>{
        console.log(result);
        res.status(200).json(
            {
                newUser:result
            }
        )

    })

    .catch(err=>{
        console.log(err);
        res.status(500).json(
            {
                newUser:result
            }
        )
    })
})

router.delete('/:id',(req,res,next)=>{
    User.remove({_id:req.params.id})
    .then(result=>{
        res.status(200).json({
            message:"value has delted.",
            studnt:result
        })
    })

    .catch(err=>{
        res.status(500).json({
            message:"error.",
            error:err

        })
    })

    router.put('/:id',(req,res,next)=>
    {
        User.findOneAndUpdate({_id:req.params.id},{
            $set:{
        name:req.body.name,
        gender:req.body.gender,
        email:req.body.email,
        number:req.body.number
            }
        })
    })
    .then(result=>{
        console.log(result);
        res.status(200).json(
            {
                newUser:result
            }
        )

    })

    .catch(err=>{
        console.log(err);
        res.status(500).json(
            {
                newUser:result
            }
        )
    })
})


router.put('/:id',(req,res,next)=>{
    console.log(req.params.id);
    User.findOneAndUpdate({_id:req.params.id},
        {
            $set:{
                name:req.body.name,
        gender:req.body.gender,
        email:req.body.email,
        number:req.body.number
            }
        })

        .then(result=>{
            
            res.status(200).json(
                {
                    newUser:result
                }
            )
        
        })
        
        .catch(err=>{
            
            res.status(500).json(
                {
                    newUser:err
                }
            )
        })
})





module.exports=router;