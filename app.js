const https = require('https');
const express = require('express');
const app = express();

app.get('/', function(req, res) {
const url = 'https://api.openweathermap.org/data/3.0/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid={9932a439138cad58ad570976a21c613e}';

  https.get(url, function(response) {
    console.log(response.statusCode);
    
    response.on('data',function(data){
      const weatherdata = JSON.parse(data);
      console.log(weatherdata);//printing the data from the api
      //tapping into paticular piece of information
      const temp = weatherdata.main.temp;
      //temp is the temprature part under the main peice of data
      console.log(temp);
      //stringify the js object example
      const object = {
        name : 'prianshu',
        favFood : 'panner'
      }
      console.log(JSON.stringify(object));
    });
    
  });
  res.send('Server is up and running');
});

app.listen(3000, function() {
  console.log('Server is running on port 3000');
});


