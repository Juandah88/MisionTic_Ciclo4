const deleteImgCrtl = {};
const path = require("path");
const fs = require("fs");
const { promisify } = require("util");

deleteImgCrtl.deleteImg = async (nameImage) => {
    promisify(fs.unlink)(path.resolve(__dirname, "../storage/imgs", nameImage))
};

module.exports = deleteImgCrtl;