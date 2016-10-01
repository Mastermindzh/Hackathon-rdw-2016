var express = require('express');
var router = express.Router();

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

/* GET parts belonging to a car. */
router.get('/carparts/:Id', function(req, res, next) {

    connection.query('SELECT * FROM `Car_has_Part` as cp left join Car as c on c.Id = cp.Car_id where c.Id = ?;',req.params.Id, function(err, rows, fields) {
        if (err) throw err;
        res.send(rows);
    });

});

module.exports = router;
