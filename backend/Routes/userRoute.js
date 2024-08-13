const express = require("express");
const protectroute = require("../middleware/protectRoute");
const usercontroller = require("../controllers/usercontroller")

const router = express.Router();

router.get("/getusers",protectroute,usercontroller.getUsers);

module.exports = router;