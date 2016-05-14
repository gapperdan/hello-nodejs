var request = require('request');
var parseXml = require('xml2js').parseString;
var util = require('util');

//sample REST GET (XML response)
request.get('http://api.bart.gov/api/etd.aspx?cmd=etd&orig=dubl&key=MW9S-E7SL-26DU-VV8V', function (error, response, body) {
    if (!error && response.statusCode == 200) {
        console.log(body); // Show the response

        parseXml(body, function (err, result) {
          console.log(util.inspect(result, false, null))
        });

    }
});
