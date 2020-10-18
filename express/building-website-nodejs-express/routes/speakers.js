const express = require('express');

const router = express.Router();

module.exports = params => {
    const { speakerService } = params;
    
    router.get('/:shortname', (request, response) => {
        return response.send(`Details page of ${request.params.shortname}`);
    });

    router.get('/', async (request, response) => {
        const speakers = await speakerService.getList();
        response.render('layout', {pageTitle: 'Speakers', template: 'speakers', speakers});  // Render takes in the location of file which contains templates and the values as second parameter which needs to be passed as parameters
        // response.sendFile(path.join(__dirname, './static/index.html'));
    });

    return router;
};
