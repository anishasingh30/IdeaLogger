const Idea = require('../models/Idea');

const createIdea = async (req, res) => {
    try {
        const { title, description } = req.body;

        if (!title || !description) {
            return res.status(400).json({ message: 'Title and description are required' });
        }

        const newIdea = new Idea({ title, description });
        const savedIdea = await newIdea.save();

        res.status(201).json({ message: 'Idea created successfully', idea: savedIdea });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getAllIdeas = async (req, res) => {
    try {
        const ideas = await Idea.find().sort({ createdAt: -1 });
        res.status(200).json(ideas);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    createIdea,
    getAllIdeas
};
