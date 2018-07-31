
var fs = require('fs');
var express = require('express');
var router = express.Router();
var multer = require('multer');

const uploadDir = 'uploads/';

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadDir)
  },
  filename: function (req, file, cb) {
    fs.readdir(uploadDir, (err, files) => {
      cb(null,  Date.now() + '_' + files.length + '_' + file.originalname )
    });
  }
})

var upload = multer({
  storage: storage,
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
  fs.readdir(uploadDir, (err, files) => {
    res.send({"data:": {"uploads":files,},});
  })
});

router.post('/', upload.single('imgdata'), function(req, res, next) {
  res.send({"msg": "complete!"});
});

module.exports = router;
