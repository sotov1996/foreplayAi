const { User } = require("../models/user")

const authValidation = async (req, res, next) => {
    const apiKey = req.headers["x-api-key"]
    if (!apiKey) {
        return res.sendStatus(401)
    }
    const user = await User.findOne({ apiKey: apiKey })

    if (!user) {
        return res.sendStatus(401)
    }

    return next()
}

module.exports = { authValidation }