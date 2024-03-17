const express = require("express");
const router = express.Router();
const { postdata, getAlldata } = require("../Controllers/user");

router.post("/user", postdata);
router.get("/getdata", getAlldata);

module.exports = router;
