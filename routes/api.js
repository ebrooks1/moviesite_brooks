var express = require('express');
var connect = require('../utils/sqlConnect'); //so that we can run queries
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //were not using this yet!!
});

router.get('/:id', function(req, res, next) {
  connect.query(`SELECT * FROM mainmodel where model="${req.params.id}"`, (err, result) => {
    if (err) {
      throw err;
    } else {
      console.log(result);

      res.json(result); //this is like a PHP echo
    }
  });
});

router.delete('/:id', (req, res) => {
  console.log('hit the delete route!', req.params.id);
  connect.query(`DELETE FROM mainmodel WHERE model="${req.params.id}"`, (err, result) => {
  if (err) {
      throw err;
    } else {
      console.log(result);
      res.json(result); //send back whatever the result is (probs an SQL message)
    }
  });
});

router.post('/', (req, res) => {
  console.log('hit the post route!');

  connect.query(`INSERT into mainmodel (id, model, modelName, pricing, modelDetails, imgPath) VALUES (NULL, "${req.body.model}", "${req.body.modelName}", "${req.body.pricing}", "${req.body.modelDetails}", "${req.body.imgPath}");`, (err, data) => {
  if (err) {
      throw err;
    } else {
      res.json(data); //send back whatever the result is (probs an SQL message)
    }
  })
});

//this gathers the movie titles from the movies table and puts it into the data variable.
router.delete('/:id', (req, res) => {
  console.log('got info from data', req.params.id);
  connect.query(`SELECT * FROM tbl_movies WHERE movie_title="${req.params.id}"`, (err, result) => {
  if (err) {
      throw err;
    } else {
      console.log(result);
      res.json(result); //send back whatever the result is (probs an SQL message)
    }
  });
});

module.exports = router;
