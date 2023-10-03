// src/api/notion/notion.controller.js

const notionService = require('./notion.service');

exports.fetchPictures = async (req, res) => {
    try {
        const data = await notionService.fetchNotionPictures();
        res.json(data);
    } catch (error) {
        res.status(500).json({ message: 'Notion API에서 오류 발생' });
    }
};
