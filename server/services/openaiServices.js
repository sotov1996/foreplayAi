const fetch = require('node-fetch')

const generateText = async (body) => {
    const { text } = body
    if (process.env.MODE === "dev") {
        const data = {
            "id": "chatcmpl-8MDYB8RLC2Bl7y8vUXSf64YC76Ntl",
            "object": "chat.completion",
            "created": 1700305995,
            "model": "gpt-3.5-turbo-0613",
            "choices": [
                {
                    "index": 0,
                    "message": {
                        "role": "assistant",
                        "content": "Romantic: \"Your codes captivate me as much as your eyes do.\"\n\nFlirty: \"Are you a loop? Because I can't escape your charm.\"\n\nFormal: \"Your programming skills resonate with utmost beauty.\""
                    },
                    "finish_reason": "stop"
                }
            ],
            "usage": {
                "prompt_tokens": 30,
                "completion_tokens": 29,
                "total_tokens": 59
            }
        }
        const contents = data.choices[0].message.content
        return contents
    }
    const url = `https://api.openai.com/v1/chat/completions`
    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`
        },
        body: JSON.stringify({
            "messages": text.map(t => ({
                "role": "user",
                "content": t
            })),
            "model": "gpt-4"
        })
    })
    if (!response.ok) {
        console.log(response)
        const error = new Error();
        error.status = response.status;
        error.message = await response.text();
        throw error
    }
    const data = await response.json()
    console.log(JSON.stringify(data.choices))
    const contents = data.choices[0].message.content
    return contents.replace(/\"/g, "")
}

module.exports = {
    generateText
}