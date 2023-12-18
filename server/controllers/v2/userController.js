const userServices = require("#services/userServices.js")
const coinsServices = require("#services/coinsServices.js")

const auth = async (req, res) => {
    try {
        const apphudId = req.query.apphud_id
        
        const data = await userServices.auth(apphudId)

        await coinsServices.addDefaultCoins({
          userId: data["_id"],
          coins: 20
        })

        return res.status(200).json(data)
      } catch (e) {
        console.log(e)
        return res.status(500).send("auth error")
      }
}

module.exports = {
    auth
}