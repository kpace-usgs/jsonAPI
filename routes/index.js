var express = require('express'); // require Express
var router = express.Router(); // setup usage of the Express router engine

var request = require('request');
//var fs = require('fs');
var filePath;

var url = 'https://staging-ca.water.usgs.gov/data/GAMA/'

/* GET home page. */
router.get('/', function(req, res) {
    console.log('index queries')
});

module.exports = router;

/* GET provinces data */
router.get('/provinces', function (req, res) {
    res.writeHead(200, {
        'Content-Type': 'application/json', 
        'Access-Control-Allow-Origin': '*'
    });
    
    request(url + 'provinces.json').pipe(res)

    /* other method, where data are stored next to node script */
    //filePath = './data/provinces.json'
    // var readStream = fs.createReadStream(filePath);
    // readStream.pipe(res);
});

/* GET deep aquifer study areas */
router.get('/deep_areas', (req, res) => {
    res.writeHead(200, {
        'Content-Type': 'application/json', 
        'Access-Control-Allow-Origin': '*'
    });
    request(url + 'deep_areas.json').pipe(res)
});

/* GET deep aquifer study units */
router.get('/deep_units', (req, res) => {
    res.writeHead(200, {
        'Content-Type': 'application/json', 
        'Access-Control-Allow-Origin': '*'
    });
    request(url + 'deep_units.json').pipe(res);
});
