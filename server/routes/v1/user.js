const express = require("express")
const router = express.Router()
const { auth } = require("#controllers/v1/userController.js")

router.get("/auth", auth)

module.exports = router