var express = require('express');
var router = express.Router();
var formidable = require('formidable');
var util = require('util');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', function(req, res){
   //console.log(req.body.tmplogo);
   // res.write(req.body.tmplogo);
   // res.end();
    res.render('index', { title: req.body.tmplogo });
});

router.post('/logoupload',function(req, res){
  if (req.headers['content-type'].indexOf('multipart/form-data') >= 0) {
    var formStream = new formidable.IncomingForm();
    formStream.uploadDir = 'public/tmp';
      formStream.keepExtensions = true;
    formStream.parse(req, function(err, fields, files) {
        //console.log(files.file.path);
        //console.log(files.file.name);

        if (err) {
            res.locals.error = err;
            console.log(err);
            //res.render('index', { title: TITLE });
            return;
        }

        res.writeHead(200, {"Content-Type": "application/json"});
          if (err) {
                res.write('{"success": false}');
            } else {
                //console.log(util.inspect({files: files}));
              //console.log(files.file.path.substring(7));
                res.write('{"success": true, "tmpname":"' + files.file.path.substring(7) + '"}');
            }
          res.end();
    });
  }

});

module.exports = router;
