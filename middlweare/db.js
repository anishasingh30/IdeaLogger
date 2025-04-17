const mongoose = require('mongoose');

const dBConnect = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL);
        console.log('DB Connected');
    } catch (err) {
        console.error('DB error:', err);
    }
};

module.exports = dBConnect;
