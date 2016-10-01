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


/* GET maintenance listing. */
router.get('/', function(req, res, next) {

    connection.query('select * from Maintenance', function(err, rows, fields) {
        if (err) throw err;
        res.send(rows);
    });

});

/* GET specific maintenance info. */
router.get('/:Id', function(req, res, next) {

    connection.query('select * from Maintenance where Id = ?',req.params.Id, function(err, rows, fields) {
        if (err) throw err;
        res.send(rows);
    });

});

/* GET maintenance items belonging to a car. */
router.get('/carmaintenance/:Id', function(req, res, next) {

    connection.query('SELECT * FROM `Car_has_Maintenance` as cm left join Car as c on c.Id = cm.Car_id where c.Id = ?;',req.params.Id, function(err, rows, fields) {
        if (err) throw err;
        res.send(rows);
    });

});

router.post('/add',function(request,response){
    var description=request.body.description;

    connection.query('INSERT INTO Maintenance (description) VALUES (?)',description, function(err, rows, fields) {
        if (err) throw err;
    });

    response.end();
});


router.post('/carmaintenance',function(request,response){
    var car_id=request.body.Car_id;
    var maintenance_id=request.body.Maintenance_id;

    connection.query('INSERT INTO Car_has_Maintenance (Car_id, Maintenance_id) VALUES (?,?)',[car_id,maintenance_id], function(err, rows, fields) {
        if (err) throw err;
    });

    response.end();
});

module.exports = router;
