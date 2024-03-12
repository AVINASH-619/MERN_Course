const { Router } = require("express")
const {User}=require("../db")
const router=Router()
const userMiddleware=require("../middleware/user")

router.post('/signup',(req,res)=>
{
    const username=req.body.username
    const password=req.body.password
    User.create({
      username: username,
      password: password
    }).then(()=>
    {
       res.json({
          message: "User created successfully"
       })
    }).catch((err)=>{
      res.json({
          msg: `Error occured while creating the User ${err}`
      })
    })
})

router.get('/courses',(req,res)=>
{

})

router.post('/couses/:couseId',userMiddleware,(req,res)=>
{

})

router.get('/purchasedCourses',userMiddleware,(req,res)=>
{

})

module.exports=router


