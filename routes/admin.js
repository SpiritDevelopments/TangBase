var express = require('express');
var router = express.Router();

//GET
router.get('/', function(req, res, next){
    res.send('admin PAGE');
});

module.exports = router;