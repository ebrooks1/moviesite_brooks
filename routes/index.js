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
        connect.query(`SELECT * FROM tbl_movies`, (err, result) => {
          if (err) {
            console.log(err);
          } else {
            console.log(result);
        //THIS is getting the data from the tbl_movies database and putting it in the data variable.
      }); //this is like a PHP echo
    }
  });
  //were not using this yet!! //this is on monday's class!!!
});

router.get('/cms', (req, res) =>  {
  console.log('hit the cms route');
  res.render('cmsForm', {
    cms : true,
    mainpage : false
  });
});

module.exports = router;
