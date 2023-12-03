const mongoose = require("mongoose");

const { DB_URL } = process.env

const mongoConnect = async () => {
    try {
        await mongoose.connect(DB_URL);
        console.log("database connection completed successfully");
    } catch (error) {
        console.log("connetc DB error", error)
    }
}

module.exports = {
    mongoConnect
}