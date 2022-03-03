const dotenv = require('dotenv')
dotenv.config()
const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const port = process.env.PORT || 5000

app.use(bodyParser.json())

app.get('/', (req, res, next) => {
    res.send('hello')
})

app.listen(port, () => console.log(`Listening on port ${port}`))