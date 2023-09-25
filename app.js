const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = 3001;

// 환경 변수에서 정보 불러오기
const NOTION_API_KEY = process.env.NOTION_API_KEY;
const NOTION_DATABASE_ID = process.env.NOTION_DATABASE_ID;
const NOTION_ENDPOINT = 'https://api.notion.com/v1';

// CORS 설정: 프론트엔드 도메인 기반 제한
app.use(cors({
    origin: 'https://seron.info'
}));

// Axios 기본 설정
axios.defaults.headers.common['Authorization'] = `Bearer ${NOTION_API_KEY}`;
axios.defaults.headers.common['Notion-Version'] = '2022-06-28';

// 기본 라우트
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Notion API를 사용하여 활동 사진 데이터 가져오기
app.get('/api/notion/pictures', async (req, res) => {
    try {
        const response = await axios.post(`${NOTION_ENDPOINT}/databases/${NOTION_DATABASE_ID}/query`, {});
        res.json(response.data);
    } catch (error) {
        console.error('Error fetching data from Notion:', error);
        res.status(500).json({ message: 'Notion API에서 오류 발생' });
    }
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
