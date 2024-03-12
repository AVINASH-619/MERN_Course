const {User}=require("../db/index.js") 
function userMiddleware(req,req,next)
{
    const username = req.headers.username;
    const password = req.headers.password;
    User.findOne({
      username: username,
      password: password,
    }).then((value) => {
      if (value)
          next()
      else {
        res.status(403).json({
          "msg":"Unauthorized user/no user found"
        })
      }
    });
}

module.exports=userMiddleware