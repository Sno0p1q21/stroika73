require('dotenv').config();
const express = require('express');
const sequelize = require('./db');
const imageUpload = require('express-fileupload');
const cors = require('cors');
const bodyParser = require('body-parser')
const models = require('./models/models');
const router = require('./routes');
const errorHandler = require('./middleware/ApiHandlerMiddleware')

const PORT = process.env.PORT || 5000;

const app = express();

app.use(cors())
app.use(imageUpload());
app.use(express.json())
app.use('/api',router);
app.use(errorHandler);

const connect = async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync();
        app.listen(PORT, () => console.log(`Server is started in ${PORT}`));
    }
    catch (e) {
        console.log(e)
    }
}

connect();