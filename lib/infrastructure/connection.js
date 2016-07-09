var Connection = require('tedious').Connection;
var config = require('../../config');
var Promise = require('es6-promise').Promise;

var connection = {
    init: function(){

        return new Promise(function(resolve, reject){

            var connection = new Connection(config);
            connection.on('connect', function(err) {
                // If no error, then good to proceed.
                if(err){
                    console.log(err);
                    return;
                }
                
                resolve(connection);
            });
        });
    },
    runQuery: function(conn, query){

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
                conn.close();
                resolve(result);
            });

            conn.execSql(request);
        });

    }
};

exports = module.exports = connection;