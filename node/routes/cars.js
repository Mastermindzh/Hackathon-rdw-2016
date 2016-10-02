var express = require('express');
var router = express.Router();

var mysql      = require('mysql');
var connection = mysql.createConnection({
    host     : 'server.mi-soft.nl',
    user     : 'rdw',
    password : 'bloemetje123',
    database : 'rdw'
});


/* GET users listing. */
router.get('/', function(req, res, next) {

    connection.query('select * from Car', function(err, rows, fields) {
        if (err) throw err;
        res.send(rows);
    });

});

router.get('/:Id', function(req, res) {
    connection.query('select * from Car WHERE id = ?',req.params.Id, function(err, rows, fields) {
        if (err) throw err;
        res.send(rows);
    });
});

router.get('/owner/:Username', function(req, res) {
    connection.query('select * from Car WHERE owner = ?',req.params.Username, function(err, rows, fields) {
        if (err) throw err;
        res.send(rows);
    });
});

router.get('/parts/:Id', function(req, res) {
    connection.query('select * from Car_has_Part as chp left join Car as c on chp.Car_id = c.id left join Part as p on p.id = chp.Part_id WHERE chp.Car_id = ?',req.params.Id, function(err, rows, fields) {
        if (err) throw err;
        res.send(rows);
    });
});

router.get('/maintenance/:Id', function(req, res) {
    connection.query('select * from Car_has_Maintenance as chm left join Car as c on chm.Car_id = c.id WHERE chm.Car_id = ?',req.params.Id, function(err, rows, fields) {
        if (err) throw err;
        res.send(rows);
    });
});



module.exports = router;
