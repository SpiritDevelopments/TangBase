var express = require('express');
var ejs = require('ejs');
var fs = require('fs');
var app = express();
var router = express.Router();
const log4js = require('log4js');
const logger = log4js.getLogger();
logger.level = 'debug';

app.engine('ejs',ejs.renderFile);

/* GET home page. */
router.get('/', function(req, res, next) {
  logger.debug('from:index to:login redirect')
  res.redirect(req.baseUrl+'/login');
});

router.post('/',(req,res) => {
  /* TODO */
  // res.render('./index.ejs');
});

module.exports = router;
