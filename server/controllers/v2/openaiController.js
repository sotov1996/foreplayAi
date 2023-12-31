const openaiServices = require("#services/openaiServices.js")
const { generateId } = require("#utils/genearteToken.js")
const { pickupPrompts, mood } = require("#data")

const generateAnswer = async (req, res) => {
    try {
        const { messages, screenType, isProfile } = req.body

        if (!messages?.length || !screenType || isProfile === undefined) {
            return res.status(400).send("Bad request")
        }

        const message = messages.map( message => message.text).join()

        const answer = await Promise.all(mood.map(async (m) => {
            const text = [`You are dating expert. You help young men to pick-up girl (she told me about herself: ${message}) Generate ${m.key} pick-up text, from 30 to 45 characters. Please respond using the same language as used in the context data.`]
            data = await openaiServices.generateText({ text })
            return {
                id: generateId(),
                text: data,
                moodType: m.title,
                rating: Math.floor(Math.random() * (99 - 65) + 65)
            }
        }))

        return res.status(200).json(answer)
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
          text: [`${textMood} ${text}`]
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
        const text = [`You are dating expert. You help young men to pick-up girl. Generate ${pickupPrompts[index]} pick-up text, 30 to 45 characters. Please respond using the same language as used in the context data.`]
        
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
