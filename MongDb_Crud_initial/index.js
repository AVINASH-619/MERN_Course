const express=require("express")
const dotenv=require("dotenv")
const bodyParse=require("body-parser")
const app=express()
const adminRouter=require("./routes/admin")
const userRouter=require("./routes/user")

dotenv.config()
app.use(bodyParse.json()) //This middleware will be added to all the subsequent routes under it
  

//This is a special use case of the use where the adminRouter will be called with all the routes that
// starts with ther /admin and the route is resolved in the adminRouter
app.use("/admin",adminRouter)
app.use("/user", userRouter)

const PORT=3000

app.listen(PORT,()=>
{
    console.log(`Server started on the port ${PORT}`)
})