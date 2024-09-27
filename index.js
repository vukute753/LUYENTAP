import http from 'http'
import myDate from './date.js'
import getURL from './getURL.js'


http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type':'text/html;charset=utf-8'});
    res.write(myDate() + "<br>")
    res.write("URL là: " + getURL.getPath(req) + "<br>")
    res.write("String query URL là: " + getURL.getParamsURL(req) + "<br>")
    res.write('Hello AnhVuDepTrai, chúc gia đình bạn trúng 5 tờ độc đắc')
    res.end()
}).listen(8080) 