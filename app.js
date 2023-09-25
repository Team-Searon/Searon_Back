const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = 3001;

// CORS 설정
app.use(cors({
    origin: 'https://seron.info' // 프론트엔드 도메인
}));

// Notion API 기본 설정
const NOTION_API_KEY = process.env.NOTION_API_KEY;
const NOTION_DATABASE_ID = process.env.NOTION_DATABASE_ID;
const NOTION_ENDPOINT = 'https://api.notion.com/v1';

axios.defaults.headers.common['Authorization'] = `Bearer ${NOTION_API_KEY}`;
axios.defaults.headers.common['Notion-Version'] = '2021-08-16';

// 기본 라우트
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Notion 활용 라우트
app.get('/api/notion/pictures', async (req, res) => {
    try {
        const response = await axios.get(`${NOTION_ENDPOINT}/databases/${NOTION_DATABASE_ID}/query`); 
        // Notion에서 데이터를 가져오는 로직
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ message: 'Notion API에서 오류 발생' });
    }
});

// ... 나머지 라우트 및 설정

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
