const { Coins } = require("#models/coins.js")

const addDefaultCoins = async (body) => {
    const { coins, userId } = body

    const data = await Coins.create({
        userId,
        coins
    })
    return data
}

const findCoins = async (body) => {
    const { userId } = body
    const data = await Coins.findOne({ userId })
    return data
}

const updateCoins = async (body) => {
    const { data } = body

    await data.save()

    return data
}

const removeCoins = async (body) => {
    const { coins, data } = body

    const allCoins = data.coins - coins

    if (allCoins >= 0) {
        data.coins = data.coins - coins
        await data.save()
    }

    return data
}

module.exports = {
    addDefaultCoins,
    findCoins,
    updateCoins
}