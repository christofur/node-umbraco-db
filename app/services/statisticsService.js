var Connection = require('../infrastructure/connection');
var config = require('../../config');
var statisticsQueries = require('../queries/statistics.queries');
var Promise = require('es6-promise').Promise;

var statisticsService = {
    
    connection: null,
    init: function(){

        return new Promise(function(resolve, reject){
            
            var conn = Connection.init();

            conn
                .then(function(connection){
                    var result = statisticsService.runQuery(connection, statisticsQueries.countNodes);

                    result.then(function(b){
                        resolve(b);
                    });
                });
        });

    },
    getCountNodes: function(){

        //init, then run query, returning a promise

    },
    runQuery: function(connection, query){

        return new Promise(function(resolve, reject){

            var Request = require('tedious').Request;

            request = new Request(query, function(err) {
                if (err) {
                    console.log(err);}
            });
            var result = "";
            request.on('row', function(columns) {
                columns.forEach(function(column) {
                    if (column.value === null) {
                        console.log('NULL');
                    } else {
                        result+= column.value + " ";
                    }
                });
                connection.close();
                resolve(result);
            });

            connection.execSql(request);
        });
        
    }
};

exports = module.exports = statisticsService;
