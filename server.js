import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import bodyParser from 'body-parser'
import CocktailController from './controllers/CocktailController.js'

const app = express()
const port = process.env.PORT || 5000

app.use(bodyParser.json())

app.get('/api/cocktail/random', CocktailController.getRandomCocktail.controller)

app.get('/', (req, res, next) => {
    res.send('hello')
})

app.listen(port, () => console.log(`Listening on port ${port}`))