// src/api/notion/notion.route.js

const express = require('express');
const router = express.Router();
const notionController = require('./notion.controller');

router.get('/pictures', notionController.fetchPictures);

module.exports = router;
