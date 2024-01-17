require('dotenv').config()
const multer = require('multer')
const path = require('path')

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, getFilePathFromFileType(getFileType(file.originalname)))
    },

    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, uniqueSuffix + '-' + file.originalname)
    }
})

getFileType = fileNameWithExtension => /[^.]+$/.exec(fileNameWithExtension)[0]

//convert to enum in the future
getFilePathFromFileType = (type) => {
    switch (type.toLowerCase()) {
        case process.env.JPG:
            return path.join(__dirname, process.env.FILES_PATH, process.env.IMAGES_PATH, process.env.JPG);
        case process.env.JPEG:
            return path.join(__dirname, process.env.FILES_PATH, process.env.IMAGES_PATH, process.env.JPEG);
        case process.env.PNG:
            return path.join(__dirname, process.env.FILES_PATH, process.env.IMAGES_PATH, process.env.PNG);
        case process.env.WEBM:
            return path.join(__dirname, process.env.FILES_PATH, process.env.IMAGES_PATH, process.env.WEBM);
        case process.env.GIF:
            return path.join(__dirname, process.env.FILES_PATH, process.env.IMAGES_PATH, process.env.GIF);
        case process.env.PDF:
            return path.join(__dirname, process.env.FILES_PATH, process.env.DOCUMENTS_PATH, process.env.PDF);
        case process.env.DOC:
            return path.join(__dirname, process.env.FILES_PATH, process.env.DOCUMENTS_PATH, process.env.DOC);
        case process.env.DOCX:
            return path.join(__dirname, process.env.FILES_PATH, process.env.DOCUMENTS_PATH, process.env.DOCX);
        case process.env.MP4:
            return path.join(__dirname, process.env.FILES_PATH, process.env.VIDEOS_PATH, process.env.MP4);
        case process.env.AVI:
            return path.join(__dirname, process.env.FILES_PATH, process.env.VIDEOS_PATH, process.env.AVI);
        case process.env.WMV:
            return path.join(__dirname, process.env.FILES_PATH, process.env.VIDEOS_PATH, process.env.WMV);
        case process.env.MOV:
            return path.join(__dirname, process.env.FILES_PATH, process.env.VIDEOS_PATH, process.env.MOV);
        case process.env.M4V:
            return path.join(__dirname, process.env.FILES_PATH, process.env.VIDEOS_PATH, process.env.M4V);
        case process.env.MKV:
            return path.join(__dirname, process.env.FILES_PATH, process.env.VIDEOS_PATH, process.env.MKV);
        default:
            return path.join(__dirname, process.env.FILES_PATH, process.env.OTHERS_PATH);
    }
}

module.exports = { upload: multer({ storage: storage }) }