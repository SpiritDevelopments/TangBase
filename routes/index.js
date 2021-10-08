var express = require('express');
var ejs = require('ejs');
var fs = require('fs');
var app = express();
var router = express.Router();
var like;

try{
  like = fs.readFileSync('./data,txt','UTF-8');
}catch(err){
  like = 0;
}

app.engine('ejs',ejs.renderFile);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('./like.ejs',{like:like});
});

router.post('/',(req,res) => {
  like++;
  fs.writeFileSync('./data.txt', String(like));
  res.render('./like.ejs',{like:like});
});

module.exports = router;
