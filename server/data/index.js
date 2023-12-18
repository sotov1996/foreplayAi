const mood = [
    {
        key: "funny",
        title: "Funny 😂",
    },
    {
        key: "flirty",
        title: "Flirty 👄",
    },
    {
        key: "romantic",
        title: "Romantic 🌹",
    },
    {
        key: "witty",
        title: "Witty 🧠"
    },
    {
        key: "cool",
        title: "Cool 🧊"
    },
    {
        key: "formal",
        title: "Formal 🎩"
    },
    {
        key: "poetic",
        title: "Poetic 🍷"
    },
    {
        key: "short",
        title: "Short 🤏"
    },
    {
        key: "long",
        title: "Long 🛹"
    }
]

const pickupPrompts = [
    "cheezy",
    "funny",
    "cute",
    "sexy",
    "romanitic",
    "spicy",
    "witty",
    "geeky",
    "flirty",
    "punny",
    "bookish",
    "lyric-Based",
    "backhanded compliment"
]

const aboutMe = "You are dating expert. You help young men to pick-up girl (she told me about herself:  --- Let's go out and spend good time. I won't go to your hotel/appartment/ etc. --- ) Generate Flirty pick-up text, 180 characters."

//выпилить языки из aboutMe English, Ukrainian, Russian

// const pickupPrompts = [
//     "Imagine you are a dating expert generate romanitic 180 character pick up line text for tinder.",
//     "Imagine you are a dating expert generate 180 character Funny Pickup Line text for tinder.",
//     "Imagine you are a dating expert generate 180 character Cute Pickup Lines  text for tinder.",
//     "Imagine you are a dating expert generate 180 character Cheesy Pickup Lines text for tinder.",
//     "Imagine you are a dating expert generate 180 character Sexy Pickup Lines text for tinder."
// ]

module.exports = {
    mood,
    pickupPrompts
}
