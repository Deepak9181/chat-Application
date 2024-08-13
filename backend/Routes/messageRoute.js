const express = require("express");
const messagecontroller = require("../controllers/messagecontroller");
const protectroute = require("../middleware/protectRoute")
const router = express.Router();

router.post("/send/:id",protectroute ,messagecontroller.sendMessage);
router.get("/:id",protectroute ,messagecontroller.getMessage);


module.exports = router;