const express = require('express');
const axios = require('axios');
const app = express();

app.get('/', async (req, res) => {
    try {
        const response = await axios.get('http://localhost:5000/api');
        res.send(`<h1>Frontend</h1><p>API says: ${response.data.message}</p>`);
    } catch (error) {
        res.send('API not reachable');
    }
});

app.listen(3000, () => console.log('Frontend running on port 3000'));
