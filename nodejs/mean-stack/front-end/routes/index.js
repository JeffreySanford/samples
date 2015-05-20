var express = require('express');
var router = express.Router();

/* GET home page. 
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
*/

router.get('/', function(req, res) {
  //  res.send('text')  //  sends just text
  //  res.send({a:200}) //  sends a JSON object
  //  res.send(200)     // send a number like a HTTP request respecnce 
  res.render('index', {
    title: "The MEAN Stack!",
    pages: 2
  });  // page located in views/<filename> renders the
});

router.get('/users/:id', function(req, res) {
  console.log(req.params);
  res.send(req.params.id, 200);
});

module.exports = router;
