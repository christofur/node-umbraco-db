var statisticsService = require('./app/services/statisticsService');

statisticsService.init()
    .then(function(v){
        console.log(v);
    });
