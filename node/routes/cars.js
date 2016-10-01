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

module.exports = router;
