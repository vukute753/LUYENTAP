import url from 'url'

const getPath = (req) => req.url

const getParamsURL = (req) => { 
    let urlData = url.parse(req.url, true)
    return JSON.stringify(urlData.query)
}

export default {getPath, getParamsURL}