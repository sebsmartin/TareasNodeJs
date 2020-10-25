const express = require("express");
const router = express.Router();

const {
    list,
    profile 
} = require("../controllers/user");



router.get("/user/list",list);
router.post("/user/profile ", profile);
router.put("/user");

module.exports = router;