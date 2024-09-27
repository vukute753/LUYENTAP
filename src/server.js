import express from "express"
import myDate from "../date.js"
import getURL from "../getURL.js"
import viewengine from "../viewEngine.js"
import dotenv from "dotenv/config"



const app = express()

viewengine(app);

const port = process.env.PORT
app.get('/', (req, res) => {
    res.send('Hello Anh Vũ. Anh đẹp trai quá')
})

app.get('/date', (req, res) => {
    res.send(myDate() + "<br>")
})

app.get('/getURL', (req, res) => {
    var getPath = getURL.getPath(req)
    var getParams = getURL.getParamsURL(req)
    res.send("Đường dẫn: " + getPath + "<br>" + "Giá trị truy vấn: " + getParams)
})

app.get('/home', (req, res) => {
    res.render("home")
})

app.get('/about', (req, res) => {
    res.render("about")
})

app.listen(port, () => {
    console.log(`Exemple app listening on port ${port}`)
})