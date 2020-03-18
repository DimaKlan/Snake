const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  console.log(req);
  return res.status(200).json({
    message: "Hello"
  });
});
module.exports = router;
