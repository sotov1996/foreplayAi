const { User } = require("../models/user")
const { genetareToken } = require("../utils/genearteToken")

const auth = async (apphudId) => {
    const token = genetareToken()
    const user = await User.create({
        apiKey: token,
        apphudId
    })
    return user
}

module.exports = {
    auth
}