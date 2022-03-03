import React, { useState, useEffect } from 'react'
import CocktailListing from './CocktailListing'
import './RandomPage.scss'

const RandomPage = () => {
    const [randomCocktails, setRandomCocktails] = useState([])

    useEffect(() => {
        getRandomCocktail()
    }, [])

    const getRandomCocktail = () => {
        const url = `${process.env.REACT_APP_BACKEND}/random`
        fetch(url)
            .then(response => {
                if(response.status === 200){
                    return response.json()
                } else {
                    throw new Error('Failed to fetch')
                }
            })
            .then(cocktail => {
                setRandomCocktails([...randomCocktails, cocktail])
            })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <div className='random-page'>
            <div className='cocktail'>
                {randomCocktails.length === 0 && <div className='loading'>Loading..</div>}
                {randomCocktails.length > 0 && (
                    <CocktailListing cocktails={randomCocktails} name='Random cocktail(s)'/>
                )}
            </div>
            <button onClick={() => getRandomCocktail()}>Add new random</button>
        </div>
    )
}

export default RandomPage