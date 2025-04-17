const express = require('express');
const dotenv = require('dotenv');
const dBConnect = require('./middlweare/db');
const ideaRoutes = require('./routes/idea');

dotenv.config();
const app = express();

app.use(express.json());

dBConnect();

app.use('/ideas', ideaRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT} `);
});
