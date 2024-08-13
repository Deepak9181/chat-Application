const mongoose = require("mongoose");

const connectToDb = async () => {
    try {
        await mongoose.connect(process.env.DATABASE);
        console.log("Connected To DATABASE");
    } catch (error) {
        console.error("Database connection error:", error);
    }
};

module.exports = connectToDb;

