const express = require("express")
const router = express.Router()
const { getMood, createMood } = require("#controllers/v2/moodController.js")
const { authValidation } = require("#utils/authValidation.js")

router.get("/mood", authValidation, getMood)
router.post("/mood", authValidation, createMood)

module.exports = router