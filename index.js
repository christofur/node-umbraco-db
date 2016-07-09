var statisticsService = require('./lib/services/statisticsService');
var growl = require('growl')

statisticsService.getCountNodes()
    .then(function(v){
        growl(v)
    });
