const deleteImgCrtl = {};
const path = require("path");
const fs = require("fs");
const { promisify } = require("util");

deleteImgCrtl.deleteImg = async (nameImage) => {
    try{
        promisify(fs.unlink)(path.resolve(__dirname, "../storage/imgs", nameImage))
    }catch(e){
        return;
    }
};

module.exports = deleteImgCrtl;