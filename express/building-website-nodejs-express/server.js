const express = require('express');
const path = require('path');
const cookieSession = require('cookie-session');

const routes = require('./routes');

const FeedbackService = require('./services/FeedbackService');
const SpeakerService = require('./services/SpeakerService');

const feedbackService = new FeedbackService('./data/feedback.json');
const speakerService = new SpeakerService('./data/speakers.json');

const app = express();
const port = 3000;

app.set('trust proxy', 1); // this is required because the request passes through reverse proxy and to allow cookie throught that proxy

app.use(cookieSession({
    name: 'session',
    keys: ['some keys to encrypt', 'another key to encrypt']
}));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));

// MIDDLEWARE : general syntax is app.use(callback)
// - execute my code
// - change request and response objects
// - end the request response cycle : mostly to send data back to caller
// - call next middleware in the cycle
app.use(express.static(path.join(__dirname, './static')));  // To load static files in the startup

app.use(async(request, response, next) => {
    try{
        const names = await speakerService.getNames();
        response.locals.speakerNames = names;
        return next();
    }
    catch(err){
        return next(err);
    }
});

app.use('/', routes({
    feedbackService,
    speakerService
}));

app.listen(port, ()=>{
    console.log(`Express server on port ${port}!`);
});