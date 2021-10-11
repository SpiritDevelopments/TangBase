var express = require('express');
var ejs = require('ejs');
var fs = require('fs');
var app = express();
var router = express.Router();

app.engine('ejs',ejs.renderFile);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('./card.ejs');
});

module.exports = router;
