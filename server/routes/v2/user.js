const express = require("express")
const router = express.Router()
const { auth } = require("#controllers/v2/userController.js")

router.get("/auth", auth)

module.exports = router