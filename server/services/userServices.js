const { User } = require("../models/user")
const { genetareToken } = require("../utils/genearteToken")

const auth = async () => {
    const token = genetareToken()
    const user = await User.create({
        apiKey: token
    })
    return user
}

module.exports = {
    auth
}