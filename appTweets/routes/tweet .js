const express = require("express");
const router = express.Router();

const {
    followers,
    create,
    remove
 
} = require("../controllers/tweet");

const { tweetId  } = require("../controllers/tweet")
const { userSignupValidator } = require("../validator")


router.get("/tweets");
router.get("/tweets/followers", followers);
router.post("/tweet/create/:tweetId", userSignupValidator, create);
router.delete("/tweet/:tweetId ", remove);


router.param("tweetId", tweetId);

module.exports = router;