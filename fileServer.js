require('dotenv').config()
require('./utils')

const express = require('express')
const multerConfig = require('./multerConfig')
const mysqlConfig = require('./mysqlConfig')

const app = express()

app.get('/', (req, res) => {
    res.send('file server is UP')
})

app.post('/files', multerConfig.upload.array('files', 10), (req, res, next) => {

    req.files.forEach(x => {
        mysqlConfig.db.query(process.env.ADD_FILE_TO_DB.format(x.filename, x.originalname), function (error, results, fields) {
            if (error) throw error
        })
    })

    res.send(req.files)
})

app.listen(process.env.SERVER_PORT, () => {
    console.log(`file server running on port: ${process.env.SERVER_PORT}`)
})