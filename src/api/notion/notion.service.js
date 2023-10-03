// src/api/notion/notion.service.js

const axios = require('axios');
const NOTION_ENDPOINT = 'https://api.notion.com/v1';
const NOTION_API_KEY = process.env.NOTION_API_KEY;
const NOTION_DATABASE_ID = process.env.NOTION_DATABASE_ID;

axios.defaults.headers.common['Authorization'] = `Bearer ${NOTION_API_KEY}`;
axios.defaults.headers.common['Notion-Version'] = '2022-06-28';

exports.fetchNotionPictures = async () => {
    try {
        const response = await axios.post(`${NOTION_ENDPOINT}/databases/${NOTION_DATABASE_ID}/query`, {});
        return response.data;
    } catch (error) {
        console.error('Error fetching data from Notion:', error);
        throw error; // 오류를 throw하여 컨트롤러에서 처리하도록 합니다.
    }
};
