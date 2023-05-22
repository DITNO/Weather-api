const { log } = require('console');
const express = require('express');
const https = require('https');


const app = express();

app.get('/',function(req,res){

    const url = 'https://api.openweathermap.org/data/3.0/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid={9932a439138cad58ad570976a21c613e}';
    https.get(url,function(response){
        console.log(response);
    })
    res.send('server is up and running');
});

app.listen(3000, function(){
    console.log('server is running on the 3000 server');
});

