var express = require('express');
var connect = require('../utils/sqlConnect');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  connect.query(`SELECT * FROM mainmodel`, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      console.log(result);

      res.render('home', {
        data = result;
      }); //this is like a PHP echo
    }
  });
  //were not using this yet!!
});

router.get('/cms', (req, res) =>  {
  console.log('hit the cms route');
  res.render('cmsForm', {
    cms : true,
    mainpage : false
  });
});

module.exports = router;
