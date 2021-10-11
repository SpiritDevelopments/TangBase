var express = require('express');
var ejs = require('ejs');
var fs = require('fs');
var app = express();
var router = express.Router();
const log4js = require('log4js');
const { RSA_NO_PADDING } = require('constants');
const session = require('express-session');
const logger = log4js.getLogger();
logger.level = 'debug';

app.engine('ejs',ejs.renderFile);

app.use(session);

/* GET home page. */
router.get('/', function(req, res, next) {
  if(!req.session.cookie.userid){
    logger.debug('from:index to:login redirect')
    res.redirect(req.baseUrl+'/login');
  }
  res.render('./index.ejs');
});

router.post('/',(req,res) => {
  /* TODO */
  // res.render('./index.ejs');
});

module.exports = router;
