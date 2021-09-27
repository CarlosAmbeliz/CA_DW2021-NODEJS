var express = require('express');
var router = express.Router();

/* GET  test */
router.get('/', function(req, res, next) {
    res.send({result: 'ok'});
});


/* POST  test */
router.post('/', function(req, res, next) {
    res.send(req.body);
  });


module.exports = router;
