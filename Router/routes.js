const express = require("express");
const router = express.Router();
const { postdata, getAlldata, updateData } = require("../Controllers/user");

router.post("/user", postdata);
router.get("/getdata", getAlldata);
router.put("/user/:id", updateData);

module.exports = router;
