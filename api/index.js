import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import constants from './constants';

//Connect to MongoDB
mongoose.Promise = global.Promise;
mongoose.connect(constants.mongoURI, {
    keepAlive: true,
    reconnectTries: Number.MAX_VALUE,
    useNewUrlParser: true
}, (err) => {
    if (err) console.log('Error', err); 

    console.log('Connected to MongoDB'); 
});

import './models/UrlShorten';
const app = express();

app.use(bodyParser.json());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header(
        'Access-Control-Allow-Headers',
        'Content-type,Accept,x-access-token,X-Key'
    );

    if (req.method == 'OPTIONS') {
        res.status(200).end();
    } else {
        next();
    }
});

import urlshorten from './routes/urlshorten';
urlshorten(app);

const PORT = 7000;
app.listen(PORT, () => {
    console.log('Server started on port', PORT);
});