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
  res.render('./login.ejs');
});

router.post('/',(req,res) => {
    /* loginLogic */
    var userid = req.body.userid;
    var pass = req.body.pass;
    if(userid == null | pass == null){
        errorMsg = "IDまたはPASSWORDが間違っています。正しく入力してください。"
        res.render('./login.ejs');
    }
    logger.debug('from:login to:index redirect');
    /* session */
    req.session.userid = userid;
    res.redirect('/');
});

module.exports = router;
