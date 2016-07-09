var Promise = require('es6-promise').Promise;

//var p = Promise.resolve(21);

var p = new Promise(function(resolve, reject){
   setTimeout(function(){
       resolve(21);
   }, 3000)

});

p
.then(function(v){
    console.log(v);
    return v * 2;
})
.then(function(v){
    console.log(v);
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            resolve(v * 2);
        }, 3000)
    });
})
.then(function(v){
    console.log(v);
});

