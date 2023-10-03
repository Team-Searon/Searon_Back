// src/app.js

const express = require('express');
const cors = require('cors');
require('dotenv').config();

const notionRoutes = require('./api/notion/notion.routes');

const app = express();
const port = 3001;

// CORS 설정
app.use(cors({
    origin: 'https://seron.info'
}));

app.use('/api/notion', notionRoutes);

// 기본 라우트
app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
