var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());



var mysql      = require('mysql');
var connection = mysql.createConnection({
    host     : 'server.mi-soft.nl',
    user     : 'rdw',
    password : 'bloemetje123',
    database : 'rdw'
});


/* GET parts listing. */
router.get('/', function(req, res, next) {

    connection.query('select * from Part', function(err, rows, fields) {
        if (err) throw err;
        res.send(rows);
    });

});

/* GET specific part. */
router.get('/:Id', function(req, res, next) {

    connection.query('select * from Part where Id = ?',req.params.Id, function(err, rows, fields) {
        if (err) throw err;
        res.send(rows);
    });

});

router.post('/add',function(request,response){
    var name=request.body.Name;
    var version=request.body.Version;

    connection.query('INSERT INTO Part (Name,Version) VALUES (?,?)',[name,version], function(err, rows, fields) {
        if (err) throw err;
    });

    response.end();
});


router.post('/carpart',function(request,response){
    var car_id=request.body.Car_id;
    var part_id=request.body.Part_id;

    connection.query('INSERT INTO Car_has_Part (Car_id, Part_id) VALUES (?,?)',[car_id,part_id], function(err, rows, fields) {
        if (err) throw err;
    });

    response.end();
});


module.exports = router;
