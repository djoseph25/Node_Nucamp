const express = require('express')
const morgan = require('morgan')

const hostname = 'localhost'
const port = 3000;

const app = express()
app.use(morgan('dev'))

// NOTE Morgan will log the file for me now
//ANCHOR _dirname will go to the obsolut path
app.use(express.static(__dirname + '/public'))


app.use((req, res)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html')
    res.end(`<html><body><h1>This is an express Server</h1></body></html>`)
})
app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`)
})