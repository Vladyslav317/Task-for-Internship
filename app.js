const cities = require('./country-json/src/country-by-capital-city.json');
const http = require('http');

http.createServer(function(req, res) {
  if (req.method == 'GET') {
    function getCountryCity(country) {
      return new Promise(resolve => {
        cities.forEach(elem => {
          if (country.toLowerCase() === elem.country.toLowerCase()) {
            resolve(`Capital of ${elem.country} is ${elem.city}`);
          }
        });
      });
    }
  }
  
  getCountryCity('Ukraine').then(result => {
    console.log(result);
  });
}).listen(3000);