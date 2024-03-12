const express = require("express");
const adminMiddleware = require("../middleware/admin");
const router = express.Router();
const { Admin, Course } = require("../db");
router.post("/signup", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  Admin.create({
    username: username,
    password: password,
  })
    .then(() => {
      res.json({
        message: "Admin created successfully",
      });
    })
    .catch((err) => {
      res.json({
        msg: `Error occured while creating the admin ${err}`,
      });
    });
});

router.post("/courses", adminMiddleware, async (req, res) => {
  const title = req.body.title;
  const description = req.body.description;
  const imageLink = req.body.imageLink;
  const price = req.body.price;

  //Use zod for input validation

  const newCourse = await Course.create({
    title,
    description,
    imageLink,
    price,
  });

  res.json({
    msg: "New Course created successfully",
    courseId: newCourse._id,
  });
});

router.get("/courses", adminMiddleware, async (req, res) => {
  const data = await Course.find({});
  res.json({
    course: data,
  });
});

module.exports = router;
