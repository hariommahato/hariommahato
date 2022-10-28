const multer = require("multer");
const path = require('path');
const express = require('express');
const storage=multer.diskStorage({
    destination:process.env.UPLOAD_PATH,
    filename:function(req, file, cb){
        cb(null,file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    },
})

const fileFilter = (req,file,cb)=>{
    if(file.mimetype === 'image/jpeg' || file.mimetype === 'image/png'){
        cb(null,true);
    }else{
        cb(null,false);
    }
};
const upload=multer({
    storage:storage,
    fileFilter:fileFilter,

})
module.exports = upload;