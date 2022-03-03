import React, { useState, useEffect } from 'react'
import CocktailCard from './CocktailCard'
import './RandomPage.scss'

const RandomPage = () => {
    const [randomCocktail, setRandomCocktail] = useState({})

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
                setRandomCocktail(cocktail)
            })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <div className='random-page'>
            <h2>Random cocktail</h2>
            {Object.keys(randomCocktail).length === 0 && <div className='loading'>Loading..</div>}
            {Object.keys(randomCocktail).length > 0 && (
                <CocktailCard data={randomCocktail}/>
            )}
            <button onClick={() => getRandomCocktail()}>New random</button>
        </div>
    )
}

export default RandomPage