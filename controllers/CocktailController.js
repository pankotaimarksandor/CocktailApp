import fetch from 'node-fetch'

const CocktailController = {
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
                    const coctailInfo = {
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
    }
}

export default CocktailController