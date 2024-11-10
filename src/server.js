import express from 'express'
import dotenv from 'dotenv/config'
// import myDateTime from './public/date.js';
// import getURL from './public/getURL.js';
import viewEngine from './config/viewEngine.js';
import webRouters from './routers/web.js'
import staticFiles from './config/staticFiles.js';
import useBootstrap from './config/bootstrapIcon.js';
import bodyParser from 'body-parser'
const path = require('path')

const app = express()


// cau hinh ejs
viewEngine(app)

// cau hinh static file
staticFiles(app)

// su dung bootstrap
useBootstrap(app)

// su dung req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const port = process.env.PORT


app.use('/', webRouters)










app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
