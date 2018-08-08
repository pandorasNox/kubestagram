
var fs = require('fs');
var express = require('express');
var router = express.Router();
var multer = require('multer');

const config = require('./../config')
const { uploadDir } = config;

if (!fs.existsSync(uploadDir)){
    fs.mkdirSync(uploadDir);
}

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
  // limits: { fileSize: maxSize }, //1 * 1000 * 1000
})

/* GET home page. */
router.get('/', function(req, res, next) {
  fs.readdir(uploadDir, (err, files) => {
    const uploadedFiles = files||[]
    res.send({"data": {"uploads":uploadedFiles.reverse(), "msg":"Hello World"},});
  })
});

router.post('/', upload.single('imgdata'), function(req, res, next) {
  res.send({"msg": "complete!"});
});

module.exports = router;
