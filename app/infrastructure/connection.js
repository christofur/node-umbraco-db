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
    }
};

exports = module.exports = connection;