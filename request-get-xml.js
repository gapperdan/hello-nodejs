var request = require('request');
var parseXml = require('xml2js').parseString;
var util = require('util');
var stringify = require('node-stringify');

var obj;

//sample REST GET (XML response) - note key is a public key
request.get('http://api.bart.gov/api/etd.aspx?cmd=etd&orig=embr&key=MW9S-E7SL-26DU-VV8V', function (error, response, body) {
    if (!error && response.statusCode == 200) {
        parseXml(body, function (err, result) {
          //console.log(util.inspect(result, false, null))
          obj = JSON.parse(JSON.stringify(result));

          console.log('current time: '+obj.root.time);
          console.log('departing from station: '+obj.root.station[0].name);
          /*
          console.log('destination 1: '+obj.root.station[0].etd[0].destination);
          console.log('destination 2: '+obj.root.station[0].etd[1].destination);
          console.log('destination 3: '+obj.root.station[0].etd[2].destination);
          console.log('destination 4: '+obj.root.station[0].etd[3].destination);
          */
          //console.log(JSON.stringify(result, {indent: true}));
        });


        obj.root.station[0].etd.forEach(getDestination);

    }
});

function getDestination(element, index, array) {
    console.log('destination: '+element.destination);
    element.estimate.forEach(getEstimateMins);

}

function getEstimateMins(element, index, array) {
    if (element.minutes == 'Leaving') {
      element.minutes == 0;
    }
    console.log('leaving in '+element.minutes+ ' mins');
}
