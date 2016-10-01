var express = require('express');
var router = express.Router();


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(JSON.stringify([{ "name": "Honda","licenseplate": "55-vv-55" },{ "name": "Ferrari","licenseplate": "66-bb-66" }]));
});

module.exports = router;
