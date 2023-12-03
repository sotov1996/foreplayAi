const userServices = require("../services/userServices")

const auth = async (_, res) => {
    try {
        const data = await userServices.auth()

        return res.status(200).json(data)
      } catch (e) {
        console.log(e)
        return res.status(500).send("auth error")
      }
}

module.exports = {
    auth
}