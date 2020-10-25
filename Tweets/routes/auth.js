const express = require("express");
const router = express.Router();

const {
    signup,
    login,
    requiereSignin
} = require("../controllers/auth");



const { userSignupValidator } = require("../validator")
router.post("/auth/signup", userSignupValidator, signup);
router.post("/auth/login", userSignupValidator, login);

module.exports = router;