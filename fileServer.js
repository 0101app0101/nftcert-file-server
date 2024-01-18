require('dotenv').config()
require('./utils')

const fs = require('fs')
const path = require('path')
const express = require('express')
const multerConfig = require('./multerConfig')
const mysqlConfig = require('./mysqlConfig')

const app = express()

app.get('/', (req, res) => {
    res.send('file server is UP')
})

const jpgPath = path.join(process.env.FILES_PATH, process.env.IMAGES_PATH, process.env.JPG)
const jpegPath = path.join(process.env.FILES_PATH, process.env.IMAGES_PATH, process.env.JPEG)
const pngPath = path.join(process.env.FILES_PATH, process.env.IMAGES_PATH, process.env.PNG)
const webmPath = path.join(process.env.FILES_PATH, process.env.IMAGES_PATH, process.env.WEBM)
const gifPath = path.join(process.env.FILES_PATH, process.env.IMAGES_PATH, process.env.GIF)
const pdfPath = path.join(process.env.FILES_PATH, process.env.DOCUMENTS_PATH, process.env.PDF)
const docPath = path.join(process.env.FILES_PATH, process.env.DOCUMENTS_PATH, process.env.DOC)
const docxPath = path.join(process.env.FILES_PATH, process.env.DOCUMENTS_PATH, process.env.DOCX)
const mp4Path = path.join(process.env.FILES_PATH, process.env.VIDEOS_PATH, process.env.MP4)
const aviPath = path.join(process.env.FILES_PATH, process.env.VIDEOS_PATH, process.env.AVI)
const wmvPath = path.join(process.env.FILES_PATH, process.env.VIDEOS_PATH, process.env.WMV)
const movPath = path.join(process.env.FILES_PATH, process.env.VIDEOS_PATH, process.env.MOV)
const m4aPath = path.join(process.env.FILES_PATH, process.env.VIDEOS_PATH, process.env.M4V)
const mk4Path = path.join(process.env.FILES_PATH, process.env.VIDEOS_PATH, process.env.MKV)
const othersPath = path.join(process.env.FILES_PATH, process.env.OTHERS_PATH)

app.post('/files', multerConfig.upload.array(process.env.FILE_UPLOAD_FIELD_NAME, process.env.FILE_UPLOAD_LIMIT), (req, res, next) => {

    req.files.forEach(x => {
        mysqlConfig.db.query(process.env.ADD_FILE_TO_DB.format(x.filename, x.originalname, process.env.TEST_USER_ID), function (error, results, fields) {
            if (error) throw error
        })
    })

    res.send(req.files)
})

app.get('/files', async (req, res) => {

    let files = {
        images: { jpg: [], jpeg: [], png: [], webm: [], gif: [] },
        documents: { pdf: [], doc: [], docx: [] },
        videos: { mp4: [], avi: [], wmv: [], mov: [], m4v: [], mkv: [] },
        others: []
    }

    const jpg = async () => await fs.promises.readdir(path.join(__dirname, process.env.USERS_PATH, process.env.TEST_USER_ID, jpgPath));

    const jpeg = async () => await fs.promises.readdir(path.join(__dirname, process.env.USERS_PATH, process.env.TEST_USER_ID, jpegPath));

    const png = async () => await fs.promises.readdir(path.join(__dirname, process.env.USERS_PATH, process.env.TEST_USER_ID, pngPath));

    const webm = async () => await fs.promises.readdir(path.join(__dirname, process.env.USERS_PATH, process.env.TEST_USER_ID, webmPath));

    const gif = async () => await fs.promises.readdir(path.join(__dirname, process.env.USERS_PATH, process.env.TEST_USER_ID, gifPath));

    const pdf = async () => await fs.promises.readdir(path.join(__dirname, process.env.USERS_PATH, process.env.TEST_USER_ID, pdfPath));

    const doc = async () => await fs.promises.readdir(path.join(__dirname, process.env.USERS_PATH, process.env.TEST_USER_ID, docPath));

    const docx = async () => await fs.promises.readdir(path.join(__dirname, process.env.USERS_PATH, process.env.TEST_USER_ID, docxPath));

    const mp4 = async () => await fs.promises.readdir(path.join(__dirname, process.env.USERS_PATH, process.env.TEST_USER_ID, mp4Path));

    const avi = async () => await fs.promises.readdir(path.join(__dirname, process.env.USERS_PATH, process.env.TEST_USER_ID, aviPath));

    const wmv = async () => await fs.promises.readdir(path.join(__dirname, process.env.USERS_PATH, process.env.TEST_USER_ID, wmvPath));

    const mov = async () => await fs.promises.readdir(path.join(__dirname, process.env.USERS_PATH, process.env.TEST_USER_ID, movPath));

    const m4v = async () => await fs.promises.readdir(path.join(__dirname, process.env.USERS_PATH, process.env.TEST_USER_ID, m4aPath));

    const mkv = async () => await fs.promises.readdir(path.join(__dirname, process.env.USERS_PATH, process.env.TEST_USER_ID, mk4Path));

    const others = async () => await fs.promises.readdir(path.join(__dirname, process.env.USERS_PATH, process.env.TEST_USER_ID, othersPath));

    await jpg().then(x => files.images.jpg = x.map(a => path.join(process.env.TEST_USER_ID, jpgPath, a)))
    await jpeg().then(x => files.images.jpeg = x.map(a => path.join(process.env.TEST_USER_ID, jpegPath, a)))
    await png().then(x => files.images.png = x.map(a => path.join(process.env.TEST_USER_ID, pngPath, a)))
    await webm().then(x => files.images.webm = x.map(a => path.join(process.env.TEST_USER_ID, webmPath, a)))
    await gif().then(x => files.images.gif = x.map(a => path.join(process.env.TEST_USER_ID, gif, a)))
    await doc().then(x => files.documents.doc = x.map(a => path.join(process.env.TEST_USER_ID, docPath, a)))
    await docx().then(x => files.documents.docx = x.map(a => path.join(process.env.TEST_USER_ID, docxPath, a)))
    await pdf().then(x => files.documents.pdf = x.map(a => path.join(process.env.TEST_USER_ID, pdfPath, a)))
    await mp4().then(x => files.videos.mp4 = x.map(a => path.join(process.env.TEST_USER_ID, mp4Path, a)))
    await avi().then(x => files.videos.avi = x.map(a => path.join(process.env.TEST_USER_ID, aviPath, a)))
    await wmv().then(x => files.videos.wmv = x.map(a => path.join(process.env.TEST_USER_ID, wmvPath, a)))
    await mov().then(x => files.videos.mov = x.map(a => path.join(process.env.TEST_USER_ID, movPath, a)))
    await m4v().then(x => files.videos.m4v = x.map(a => path.join(process.env.TEST_USER_ID, m4aPath, a)))
    await mkv().then(x => files.videos.mkv = x.map(a => path.join(process.env.TEST_USER_ID, mk4Path, a)))
    await others().then(x => files.others = x.map(a => path.join(process.env.TEST_USER_ID, othersPath, a)))

    res.send(files)
})

app.use('/file', express.static(path.join(__dirname, process.env.USERS_PATH)));

app.listen(process.env.SERVER_PORT, () => {
    console.log(`file server running on port: ${process.env.SERVER_PORT}`)
})