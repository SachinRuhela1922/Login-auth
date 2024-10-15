const mongoose = require('mongoose');

// Correct connection string with encoded special characters in password
mongoose.connect("mongodb+srv://pratapruhela1922:qwerty1922roundsround@demotour.6duqb.mongodb.net/?retryWrites=true&w=majority&appName=DemoTour")
.then(() => {
    console.log("MongoDB connected successfully");
})
.catch((error) => {
    console.error("Failed to connect to MongoDB:", error);
});

const LogInSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

const collection = new mongoose.model("LogInCollection", LogInSchema);

module.exports = collection;
