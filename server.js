const express = require('express');
const dotenv = require('dotenv');

dotenv.config();
const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.json({
        message: "Node app deployed successfully with Azure CI/CD",
        time: new Date().toISOString()
    });
});

app.get('/health', (req, res) => {
    res.json({ status: "OK", time: new Date().toISOString() });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});