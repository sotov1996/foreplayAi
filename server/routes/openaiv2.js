const express = require("express")
const router = express.Router()
const { generateAnswer, generateAnswerWithMood, generatePickup } = require("../controllers/openaiControllerV2")
const { authValidation } = require("../utils/authValidation")

router.post("/answer", authValidation, generateAnswer)
router.post("/answer/mood", authValidation, generateAnswerWithMood)
router.get("/pickup", authValidation, generatePickup)

module.exports = router