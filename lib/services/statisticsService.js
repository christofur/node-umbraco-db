var Connection = require('../infrastructure/connection');
var statisticsQueries = require('../queries/statistics.queries');
var Promise = require('es6-promise').Promise;

var statisticsService = {
    
    connection: null,
    init: function(){

        return new Promise(function(resolve, reject){
            
            var conn = Connection.init();

            conn
                .then(function(connection){
                    resolve(connection);
                });
        });

    },
    getCountNodes: function(){

        return statisticsService.runStatisticsQuery(statisticsQueries.countNodes);

    },
    getCountProperties: function(){

        return statisticsService.runStatisticsQuery(statisticsQueries.countProperties);

    },
    runStatisticsQuery: function(query){

        return new Promise(function(resolve, reject){

            statisticsService.init()
                .then(function(connection){

                    var result = Connection.runQuery(connection, query);

                    result.then(function(data){
                        resolve(data);
                    });
                });
        });
    }
};

exports = module.exports = statisticsService;
