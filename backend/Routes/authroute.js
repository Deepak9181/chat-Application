const express = require("express");
const authcontroller = require("../controllers/authcontroller")

const router = express.Router();

router.post("/sign",authcontroller.signup);
router.post("/login",authcontroller.login);
router.post("/logout",authcontroller.logout);



module.exports =router;