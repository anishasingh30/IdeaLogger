const express = require('express');
const router = express.Router();
const { createIdea, getAllIdeas } = require('../controllers/ideaController');

router.post('/', createIdea);
router.get('/', getAllIdeas);

module.exports = router;
