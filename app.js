const app = require("express")();
const port = 3000;
app.get("/", (req, res) => {
  res.status(200).json("you are on the home page");
  res.status(200).
});
app.listen(port, () => {
  console.log(`server started on the port ${port}`);
});
