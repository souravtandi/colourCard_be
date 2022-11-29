const express = require('express');
const cors = require('cors');
const app = express();

const mongoose = require('mongoose');
const { MONGO_DB } = require('./config');
mongoose.connect(MONGO_DB);

mongoose.connection.on('connected', () => {
    console.log('connected');
});
mongoose.connection.on('error', (error) => {
    console.log('Some error', error);
});

const APP_PORT = 5000;

app.use(cors());
app.use(express.json());

require('./models/cards_model');
app.use(require('./routes/cards_router'));

require('./models/userCard_model');
app.use(require('./routes/userCard_router'));

app.listen(APP_PORT, () => {
    console.log('Server started on port: ' + `${APP_PORT}`);
});