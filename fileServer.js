const express = require('express')
const multerConfig = require('./multerConfig')
const mysqlConfig = require('./mysqlConfig')

const app = express()
const port = 8080

app.get('/', (req, res) => {
    res.send('file server is UP')
})

app.post('/files', multerConfig.upload.array('files', 10), (req, res, next) => {
    // req.files is array of `photos` files
    // req.body will contain the text fields, if there were any

    res.send(req.files)
})

app.listen(port, () => {
    console.log(`file server running on port: ${port}`)
})