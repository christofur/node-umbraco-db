var expect = require('chai').expect;
var statisticsService = require('../lib/services/statisticsService');

describe('Statistics', function() {
    it('Should get a valid number > 0 for Node Count', function(){

        return statisticsService.getCountNodes().then(function(data){
            expect(data).to.be.above(0);
        });

    });

    it('Should get a valid number > 0 for Property Count', function(){

        return statisticsService.getCountProperties().then(function(data){
            expect(data).to.be.above(0);
        });

    });

});



