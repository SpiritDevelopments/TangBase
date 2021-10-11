var express = require('express');
var ejs = require('ejs');
var fs = require('fs');
var app = express();
var router = express.Router();
const log4js = require('log4js');
const logger = log4js.getLogger();
logger.level = 'debug';
var errorMsg;

app.engine('ejs',ejs.renderFile);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('./login.ejs',{erroMsg:errorMsg});
});

router.post('/',(req,res) => {
    logger.debug('from:login to:index redirect');
    // res.redirect(req.baseUrl + '/');
    res.render('./index.ejs');
});

module.exports = router;
