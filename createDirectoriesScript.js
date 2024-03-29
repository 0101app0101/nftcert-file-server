require('dotenv').config()
const fs = require('fs')
const path = require('path')

fs.mkdirSync(path.join(__dirname, process.env.USERS_PATH, process.env.TEST_USER_ID, process.env.FILES_PATH, process.env.IMAGES_PATH, process.env.JPG), { recursive: true })
fs.mkdirSync(path.join(__dirname, process.env.USERS_PATH, process.env.TEST_USER_ID, process.env.FILES_PATH, process.env.IMAGES_PATH, process.env.JPG), { recursive: true })
fs.mkdirSync(path.join(__dirname, process.env.USERS_PATH, process.env.TEST_USER_ID, process.env.FILES_PATH, process.env.DOCUMENTS_PATH, process.env.PDF), { recursive: true })
fs.mkdirSync(path.join(__dirname, process.env.USERS_PATH, process.env.TEST_USER_ID, process.env.FILES_PATH, process.env.DOCUMENTS_PATH, process.env.DOC), { recursive: true })
fs.mkdirSync(path.join(__dirname, process.env.USERS_PATH, process.env.TEST_USER_ID, process.env.FILES_PATH, process.env.DOCUMENTS_PATH, process.env.DOCX), { recursive: true })
fs.mkdirSync(path.join(__dirname, process.env.USERS_PATH, process.env.TEST_USER_ID, process.env.FILES_PATH, process.env.IMAGES_PATH, process.env.JPEG), { recursive: true })
fs.mkdirSync(path.join(__dirname, process.env.USERS_PATH, process.env.TEST_USER_ID, process.env.FILES_PATH, process.env.IMAGES_PATH, process.env.PNG), { recursive: true })
fs.mkdirSync(path.join(__dirname, process.env.USERS_PATH, process.env.TEST_USER_ID, process.env.FILES_PATH, process.env.IMAGES_PATH, process.env.WEBM), { recursive: true })
fs.mkdirSync(path.join(__dirname, process.env.USERS_PATH, process.env.TEST_USER_ID, process.env.FILES_PATH, process.env.IMAGES_PATH, process.env.GIF), { recursive: true })
fs.mkdirSync(path.join(__dirname, process.env.USERS_PATH, process.env.TEST_USER_ID, process.env.FILES_PATH, process.env.VIDEOS_PATH, process.env.MP4), { recursive: true })
fs.mkdirSync(path.join(__dirname, process.env.USERS_PATH, process.env.TEST_USER_ID, process.env.FILES_PATH, process.env.VIDEOS_PATH, process.env.AVI), { recursive: true })
fs.mkdirSync(path.join(__dirname, process.env.USERS_PATH, process.env.TEST_USER_ID, process.env.FILES_PATH, process.env.VIDEOS_PATH, process.env.WMV), { recursive: true })
fs.mkdirSync(path.join(__dirname, process.env.USERS_PATH, process.env.TEST_USER_ID, process.env.FILES_PATH, process.env.VIDEOS_PATH, process.env.MOV), { recursive: true })
fs.mkdirSync(path.join(__dirname, process.env.USERS_PATH, process.env.TEST_USER_ID, process.env.FILES_PATH, process.env.VIDEOS_PATH, process.env.M4V), { recursive: true })
fs.mkdirSync(path.join(__dirname, process.env.USERS_PATH, process.env.TEST_USER_ID, process.env.FILES_PATH, process.env.VIDEOS_PATH, process.env.MKV), { recursive: true })
fs.mkdirSync(path.join(__dirname, process.env.USERS_PATH, process.env.TEST_USER_ID, process.env.FILES_PATH, process.env.OTHERS_PATH), { recursive: true })