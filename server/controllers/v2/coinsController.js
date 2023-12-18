const coinsServices = require("#services/coinsServices.js")

const getCoins = async (req, res) => {
    try {
        const userId = req.query.userId

        if (!userId) {
            return res.status(400).send("Bad request")
        }
        const data = await coinsServices.findCoins({ userId })

        if (!data) {
            return res.status(400).send("This user has no points")
        }

        return res.status(200).json({
            userId: data.userId,
            coins: data.coins
        })
    } catch (e) {
        return res.status(500).send("addCoins error")
    }
}

const addCoins = async (req, res) => {
    try {
        const userId = req.body.userId
        const coins = Number(req.body.coins)

        if (!userId || !coins) {
            return res.status(400).send("Bad request")
        }
        const data = await coinsServices.findCoins({ userId })

        if (!data) {
            return res.status(400).send("This user has no points")
        }

        data.coins = data.coins + coins
        await coinsServices.updateCoins({ data })

        return res.status(200).send({
            userId: data.userId,
            coins: data.coins
        })
    } catch (e) {
        return res.status(500).send("addCoins error")
    }
}

const removeCoins = async (req, res) => {
    try {
        const userId = req.body.userId
        const coins = Number(req.body.coins)

        if (!userId || !coins) {
            return res.status(400).send("Bad request")
        }
        const data = await coinsServices.findCoins({ userId })

        if (!data) {
            return res.status(400).send("This user has no points")
        }

        const resultCoins = data.coins - coins

        if (resultCoins < 0) {
            return res.status(501).send("You don't have enough points")
        }

        data.coins = resultCoins
        await coinsServices.updateCoins({ data })

        return res.status(200).send({
            userId: data.userId,
            coins: data.coins
        })
    } catch (e) {
        return res.status(500).send("addCoins error")
    }
}

module.exports = {
    getCoins,
    addCoins,
    removeCoins
}
