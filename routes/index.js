var express = require('express'); // require Express
var router = express.Router(); // setup usage of the Express router engine
var fs = require('fs');

var filePath;

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
    filePath = './data/provinces.json'
    var readStream = fs.createReadStream(filePath);
    readStream.pipe(res);
});

/* GET deep aquifer study areas */
router.get('/deep_areas', (req, res) => {
    res.writeHead(200, {
        'Content-Type': 'application/json', 
        'Access-Control-Allow-Origin': '*'
    });
    filePath = './data/deep_areas.json'
    var readStream = fs.createReadStream(filePath);
    readStream.pipe(res);
});

/* GET deep aquifer study units */
router.get('/deep_units', (req, res) => {
    res.writeHead(200, {
        'Content-Type': 'application/json', 
        'Access-Control-Allow-Origin': '*'
    });
    filePath = './data/deep_units.json'
    var readStream = fs.createReadStream(filePath);
    readStream.pipe(res);
});
