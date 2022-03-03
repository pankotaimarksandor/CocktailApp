import React from 'react'
import CocktailCard from './CocktailCard'
import './CocktailListing.scss'

const CocktailListing = (props) => {
    const { cocktails, name } = props

    return (
        <div className='cocktail-listing'>
            <div className='list'>
                <h2>{name}</h2>
                <div className='container'>
                    {cocktails.map((cocktail, i) => (
                        <CocktailCard key={i} data={cocktail}/>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default CocktailListing