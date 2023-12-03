const openaiServices = require("../services/openaiServices")
const { generateId } = require("../utils/genearteToken")

const generateAnswer = async (req, res) => {
    try {
        if (!req.body.length) {
            return res.status(400).send("Bad request")
        }

        const text = req.body.join()
        const data = await openaiServices.generateText({ text })

        return res.status(200).json({
            id: generateId(),
            text: data,
        })
    } catch (e) {
        return res.status(500).send("generateText error")
    }
}

const generateAnswerWithMood = async (req, res) => {
    try {
        const text = req.body.text
        const mood = req.body.mood

        if (!text || !mood) {
            return res.status(400).send("Bad request")
        }

        const textMood = `Generate text in a ${mood} tone: `

        const data = await openaiServices.generateText({
          text: `${textMood} ${text}`
        })

        return res.status(200).json({
            id: generateId(),
            text: data,
        })
    } catch (e) {
        return res.status(500).send("generateText error")
    }
}

const generatePickup = async (_, res) => {
    try {
        const data = await openaiServices.generateText({
          text: "generate pickup text"
        })

        return res.status(200).json({
            id: generateId(),
            text: data,
        })
    } catch (e) {
        return res.status(500).send("generatePickup error")
    }
}

module.exports = {
    generateAnswer,
    generateAnswerWithMood,
    generatePickup
}
