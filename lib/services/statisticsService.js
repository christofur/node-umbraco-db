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
                    
                    if(connection){
                        resolve(connection);    
                    }
                    else{
                        throw new Error('Did not get a valid connection object');
                    }
                    
                })
                .catch(function(err){
                    console.log('Error connecting to database: ' + err);
                });
        });

    },
    getCountNodes: function(){

        return statisticsService.runStatisticsQuery(statisticsQueries.countNodes);

    },
    getCountProperties: function(){

        return statisticsService.runStatisticsQuery(statisticsQueries.countProperties);

    },
    getCountMembers: function(){

        return statisticsService.runStatisticsQuery(statisticsQueries.countMembers);

    },
    getCountMemberGroups: function(){

        return statisticsService.runStatisticsQuery(statisticsQueries.countMemberGroups);

    },
    getCountUsers: function(){

        return statisticsService.runStatisticsQuery(statisticsQueries.countUsers);

    },
    getCountLogEntries: function(){

        return statisticsService.runStatisticsQuery(statisticsQueries.countLogEntries);

    },
    getCountDocumentTypes: function(){

        return statisticsService.runStatisticsQuery(statisticsQueries.countDocumentTypes);

    },
    getCountTrashedItems: function(){

        return statisticsService.runStatisticsQuery(statisticsQueries.countTrashedItems);

    },
    runStatisticsQuery: function(query){

        return new Promise(function(resolve, reject){

            statisticsService.init()
                .then(function(connection){

                    var result = Connection.runQuery(connection, query);

                    result.then(function(data){
                        resolve(data);
                    });
                })
                .catch(function(err){

                    console.error('There was an error! ' + err);

                    return -1;

                });
        });
    }
};

exports = module.exports = statisticsService;
