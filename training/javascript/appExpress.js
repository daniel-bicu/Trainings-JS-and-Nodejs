const express = require('express');

const app = express();

app.get('/', function(require, response){

    response.send('Home');
    response.end();

});

app.listen(3000, function(){

    console.log('Server running');
});