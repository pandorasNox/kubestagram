
var fs = require('fs');
var express = require('express');
var router = express.Router();
var multer = require('multer')

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '/uploads')
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now())
  }
})

var upload = multer({
  // storage: storage,
  dest: 'uploads/',
  fileFilter: function(req, file, next){
    if(!file){
      next();
    }
    const image = file.mimetype.startsWith('image/');
    if(image){
      console.log('photo uploaded');
      next(null, true);
    }else{
      console.log(`filetype ${file.mimetype} not supported`);

      return next();
    }
  },
})

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send({"msg": "Hello World!!!"});
});

router.post('/', upload.single('image'), function(req, res, next) {
  const { file } = req;

  fs.rename( file.path, './uploads/' + Date.now() + '_' + file.originalname , function(err) {
      if ( err ) console.log('ERROR: ' + err);
  });

  res.send({"msg": "complete!"});
});

module.exports = router;
