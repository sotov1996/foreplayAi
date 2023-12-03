const moodServices = require("../services/moodServices")

const getMood = async (_, res) => {
    try {
        const data = await moodServices.getMood()

        return res.status(200).json(data)
    } catch (e) {
        return res.status(500).send("getMood error")
    }
}

const createMood = async (_, res) => {
    try {
        await moodServices.createMood()

        return res.sendStatus(200)
    } catch (e) {
        return res.status(500).send("createMood error")
    }
}

module.exports = {
    getMood,
    createMood
}
