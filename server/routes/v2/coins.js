const express = require("express")
const router = express.Router()
const { getCoins, addCoins, removeCoins } = require("#controllers/v2/coinsController.js")
const { authValidation } = require("#utils/authValidation.js")

router.get("/coins", authValidation, getCoins)
router.post("/coins", authValidation, addCoins)
router.delete("/coins", authValidation, removeCoins)

module.exports = router