const express = require("express")
const router = express.Router()
const { getMood, createMood } = require("../controllers/moodController")
const { authValidation } = require("../utils/authValidation")

router.get("/mood", authValidation, getMood)
router.post("/mood", authValidation, createMood)

module.exports = router