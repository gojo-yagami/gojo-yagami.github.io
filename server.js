const express = require("express");
const app = express();

app.use(express.json());

let sessions = []; // Store sessions in-memory (replace with a database for production)

// Endpoint to start a session
app.post("/start-session", (req, res) => {
    const { phoneNumber } = req.body;

    if (!phoneNumber) {
        return res.status(400).json({ message: "Phone number is required." });
    }

    const sessionId = `session_${Date.now()}`;
    sessions.push({ sessionId, phoneNumber, createdAt: new Date() });

    res.status(200).json({ sessionId, message: "Session started successfully." });
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
