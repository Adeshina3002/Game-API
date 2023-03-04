const mongoose = require ("mongoose")

async function dbConnect() {
    await mongoose.set("strictQuery", true);
    await mongoose.connect(process.env.Mongo_URI);
    console.log("Database Connected...");
}

module.exports = dbConnect