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

    it('Should get a valid number > 0 for Member Count', function(){

        return statisticsService.getCountMembers().then(function(data){
            expect(data).to.be.above(0);
        });

    });

    it('Should get a valid number > 0 for Member Group Count', function(){

        return statisticsService.getCountMemberGroups().then(function(data){
            expect(data).to.be.above(0);
        });

    });

    it('Should get a valid number > 0 for User Count', function(){

        return statisticsService.getCountUsers().then(function(data){
            expect(data).to.be.above(0);
        });

    });

    it('Should get a valid number > 0 for Log Entry Count', function(){

        return statisticsService.getCountLogEntries().then(function(data){
            expect(data).to.be.above(0);
        });

    });

    it('Should get a valid number > 0 for Document Type Count', function(){

        return statisticsService.getCountDocumentTypes().then(function(data){
            expect(data).to.be.above(0);
        });

    });

    it('Should get a valid number > 0 for Trashed Item Count', function(){

        return statisticsService.getCountTrashedItems().then(function(data){
            expect(data).to.be.above(0);
        });

    });

});



