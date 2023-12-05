const openaiServices = require("../services/openaiServices")
const { generateId } = require("../utils/genearteToken")
const { pickupPrompts } = require("../data")

const generateAnswer = async (req, res) => {
    try {
        const { messages, screenType, isProfile } = req.body

        if (!messages?.length || !screenType || isProfile === undefined) {
            return res.status(400).send("Bad request")
        }

        const message = messages.map( message => message.text).join()
        const text = `You are dating expert. You help young men to pick-up girl (she told me about herself: ${message}) Generate Flirty pick-up text, 180 characters.`
        const data = await openaiServices.generateText({ text })

        return res.status(200).json({
            id: generateId(),
            text: data,
        })
    } catch (e) {
        console.log(e)
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
        const index = Math.floor(Math.random() * (pickupPrompts.length))
        const text = `You are dating expert. You help young men to pick-up girl. Generate ${pickupPrompts[index]} pick-up text, 180 characters.`
        
        const data = await openaiServices.generateText({
          text
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
