const express = require("express");
const router = express.Router();

const {
    avatar,
    banner,
    upload,
    
} = require("../controllers/file");


router.get("/file/avatar", avatar);
router.get("/file/banner", banner);
router.post("/file/avatar/upload", upload);
router.post("/file/banner/upload", upload);

module.exports = router;