const idea = require('../models/Idea');

const createIdea = async (req, res) => {
    try {
        const { title, description } = req.body;

        if (!title || !description) {
            return res.status(400).json({ message })
        }

    } catch (error) {
        res.status(500).json({ message: error })
    }
}
