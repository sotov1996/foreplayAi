const { Mood } = require("../models/mood")
const { mood } = require("../data")

const getMood = async () => {
    const user = await Mood.find({})
    return user
}

const createMood = async () => {
    const propmise = await Promise.all(
        mood.map(async (n) => {
            await Mood.findOneAndUpdate(n, n, { upsert: true })
        })
    )
    return propmise
}

module.exports = {
    getMood,
    createMood,
}
