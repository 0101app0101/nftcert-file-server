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

getFilePathFromFileType = (type) => {
    switch (type.toLowerCase()) {
        case process.env.JPG:
            return path.join(__dirname, 'files', 'images', 'jpeg')
        case process.env.JPEG:
            return path.join(__dirname, 'files', 'images', 'jpeg')
        case process.env.PNG:
            return path.join(__dirname, 'files', 'images', 'png')
        case process.env.WEBM:
            return path.join(__dirname, 'files', 'images', 'webm')
        case process.env.GIF:
            return path.join(__dirname, 'files', 'images', 'gif')
        case process.env.PDF:
            return path.join(__dirname, 'files', 'documents', 'pdf')
        case process.env.DOC:
            return path.join(__dirname, 'files', 'documents', 'doc')
        case process.env.DOCX:
            return path.join(__dirname, 'files', 'documents', 'docx')
        case process.env.MP4:
            return path.join(__dirname, 'files', 'images', 'mp4')
        case process.env.AVI:
            return path.join(__dirname, 'files', 'images', 'avi')
        case process.env.WMV:
            return path.join(__dirname, 'files', 'images', 'wmv')
        case process.env.MOV:
            return path.join(__dirname, 'files', 'images', 'mov')
        case process.env.M4V:
            return path.join(__dirname, 'files', 'images', 'm4v')
        case process.env.MKV:
            return path.join(__dirname, 'files', 'images', 'mkv')
        default:
            return path.join(__dirname, 'files', 'others');
    }
}

module.exports = { upload: multer({ storage: storage }) }