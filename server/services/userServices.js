const { User } = require("#models/user.js")
const { genetareToken } = require("#utils/genearteToken.js")

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