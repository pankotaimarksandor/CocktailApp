import fetch from 'node-fetch'

const CocktailController = {
    //get random cocktail controller
    getRandomCocktail: {
        controller: (req, res, send) => {
            const url = process.env.COCKTAIL_API + '/random.php'
            
            fetch(url)
                .then((response) => {
                    if(response.status === 200){
                        return response.json()
                    } else {
                        throw new Error('Can not get random cocktail');
                    }
                })
                .then((cocktail) => {
                    let coctailInfo = {
                        id: cocktail.drinks[0].idDrink,
                        name: cocktail.drinks[0].strDrink,
                        thumb: cocktail.drinks[0].strDrinkThumb
                    }
                    console.log('Random cocktail details: ', coctailInfo)
                    res.status(200).json(coctailInfo)
                })
                .catch(err => {
                    console.log(err)
                    res.status(500).json(err.toString())
                })
        }
    },
    //SEARCH COCKTAIL BY NAME AS QUERY
    searchCocktailsByName: {
        controller: (req, res, next) => {
            const { name } = req.query
            const url = process.env.COCKTAIL_API + `/search.php?s=${name}`
            
            fetch(url)
                .then((response) => {
                    if(response.status === 200){
                        return response.json()
                    } else {
                        throw new Error('Can not get cocktails');
                    }
                })
                .then((cocktails) => {
                    let foundCocktails = []
                    
                    cocktails.drinks.map(cocktail => {
                        let newCocktail = {
                            id: cocktail.idDrink,
                            name: cocktail.strDrink,
                            thumb: cocktail.strDrinkThumb
                        }
                        foundCocktails.push(newCocktail)
                        
                    })
                    res.status(200).json(foundCocktails)
                })
                .catch(err => {
                    console.log(err)
                    res.status(500).json(err.toString())
                })
        }
    },
    getCocktailDetailsById: {
        controller: (req, res, next) => {
            const { id } = req.params
            const url = process.env.COCKTAIL_API + `/lookup.php?i=${id}`

            fetch(url)
                .then((response) => {
                    if(response.status === 200){
                        return response.json()
                    } else {
                        throw new Error('Can not get cocktail by id');
                    }
                })
                .then((cocktail) => {
                    let ingredients = []
                    let measures = []

                    //LOOP ON INGREDIENTS AND MEASURES 1 TO 15 AND ADD IT TO ARRAY IF IT IS NOT NULL
                    for(let i = 1; i <= 15; i++){
                        let ingredient = 'strIngredient' + i
                        let measure = `strMeasure${i}`

                        if(cocktail.drinks[0][ingredient] !== null) ingredients.push(cocktail.drinks[0][ingredient])
                        if(cocktail.drinks[0][measure] !== null) measures.push(cocktail.drinks[0][measure])
                    }

                    let details = {
                        id: cocktail.drinks[0].idDrink,
                        name: cocktail.drinks[0].strDrink,
                        thumb: cocktail.drinks[0].strDrinkThumb,
                        instructions: cocktail.drinks[0].strInstructions,
                        ingredients,
                        measures
                    }

                    res.status(200).json(details)
                })
                .catch(err => {
                    console.log(err)
                    res.status(500).json(err.toString())
                })
        }
    }
}

export default CocktailController