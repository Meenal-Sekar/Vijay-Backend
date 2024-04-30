const express=require('express');
const router=express.Router()  //router is ready now
const signupTemplatecopy=require('../models/SignupModel');//table attach

router.post("/signup",(request,response)=>
{
    const sam=new signupTemplatecopy({

        name:request.body.name, //fullname(front end form name=fullName)
        email:request.body.email,
        contact:request.body.contact,
        age:request.body.age,
        jobRole:request.body.jobRole
    })
    sam.save().then(data=>
        {
            response.json(data);
            console.log('Data added successfully');
        }).catch(error=>
            {

                response.json(error)
            })
})


module.exports=router;








//table--->router--->server-js