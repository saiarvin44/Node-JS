const express = require('express');

const router = express.Router();
const speakerRoutes = require('./speakers');

const feedbackRoutes = require('./feedback');

module.exports = params => {

    const {speakerService} = params;

    router.get('/', async (request, response) => {
        const topSpeakers = await speakerService.getList();
        if(!request.session.visitcount){   // store the cookie information in a variable visitcount in request.session
            request.session.visitcount = 0;
        }
        request.session.visitcount += 1;
        console.log(`Number of visits : ${request.session.visitcount}`);

        response.render('layout', {pageTitle: 'Welcome', template: 'index', topSpeakers});  // Render takes in the location of file which contains templates and the values as second parameter which needs to be passed as parameters
        // response.sendFile(path.join(__dirname, './static/index.html'));
    });
    router.use('/speakers', speakerRoutes(params));
    router.use('/feedback', feedbackRoutes(params));
    
    return router;
};
