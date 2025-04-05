const express = require("express");
const router = express.Router();
const challengesService = require("./challenges.service");

router.get("/rotate-array-n-times/:times", challengesService.rotateArrayNTimes);
router.get("/count-instances", challengesService.countInstances)
router.get("/group-by-city", challengesService.groupByCity)

module.exports = router;
