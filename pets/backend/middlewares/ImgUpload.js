const multer = require("multer");
const path = require("path");
const { v4: uuidv4 } = require("uuid");

const storage = multer.diskStorage({
  destination: path.join(__dirname, "../storage/imgs"),
  filename: function (req, file, cb) {
    cb(null, uuidv4() + path.extname(file.originalname).toLocaleLowerCase());
  },
});

const upload = multer({
  storage,
  fileFilter: (req, file, cb) => {
    const fileTypes = /jpeg|jpg|png|svg|SVG|JPG|PNG/;
    const mainType = fileTypes.test(file.mimetype);
    const extNmae = fileTypes.test(path.extname(file.originalname));
    if (mainType && extNmae) {
      return cb(null, true);
    }
    cb("error: El archivo no es valido, debe ser jpeg|jpg|png|svg|SVG|JPG|PNG");
  },
});

module.exports = upload;
