import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import CocktailController from './controllers/CocktailController.js'

const app = express()
const port = process.env.PORT || 5000

app.use(bodyParser.json())
app.use(cors())

//ENDPOINTS
app.get('/api/cocktail/random', CocktailController.getRandomCocktail.controller)
app.get('/api/cocktail/:id', CocktailController.getCocktailDetailsById.controller)
app.post('/api/cocktail/search', CocktailController.searchCocktailsByName.controller)

app.get('/', (req, res, next) => {
    res.send('hello')
})

app.listen(port, () => console.log(`Listening on port ${port}`))