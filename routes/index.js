var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index');
});

router.get('/sobre', (req,res) => {
  res.render("sobre")
})

router.get('/servicos', (req,res) => {
  res.render("servicos")
})

router.get('/contato', (req,res) => {
  res.render("contato")
})

router.get('/login', (req,res) => {
  res.render("login")
})

module.exports = router;