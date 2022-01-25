var express = require('express');
const { response } = require('../app');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
res.render('index', { title: 'Express' });
});
/* GET nosotros. */
router.get('/nosotros', function(req, res, next) {
  res.render('nosotros', { title: 'nosotros somos ...' });
});

router.get('/precio', function(req, res, next) {
  res.render('precio', { title: 'Aqui ensayos Bootstrap ...' });
});

module.exports = router;
