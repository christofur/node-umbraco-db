var expect = require('chai').expect;

describe('Connection', function() {
    it('Should find a user config document or default config document. In order for tests to run, you need to point the config at a real database. For more information, see https://github.com/christofur/node-umbraco-db', function(){
        expect(false).to.eql(true);
    });

    it('Should find a connection string specified in config', function(){
        expect(false).to.eql(true);
    });

    it('Should return "not ready" status if no connection string set', function(){
        expect(false).to.eql(true);
    });

    it('Should return "ready" status if connection string is set', function(){
        expect(false).to.eql(true);
    });

    it('Should make a successful connection to integration testing database', function(){
        expect(false).to.eql(true);
    });

    it('Should keep connection open after successful connect', function(){
        expect(false).to.eql(true);
    });

    it('Should fail to connect if bad connection details used', function(){
        expect(false).to.eql(true);
    });

    it('Should return a useful error message if connection fails', function(){
        expect(false).to.eql(true);
    });

    it('Should close connection after a period of inactivity', function(){
        expect(false).to.eql(true);
    });

});


/*

    Connection Manager

    - finds a config document
    - looks for suitable connection string (or builds one)
    - Checks whether it has everything it needs to connect
    - Attempts a connection and returns success or failure
    - If failure, returns useful error message
    - Closes a connection after period of inactivity



 */