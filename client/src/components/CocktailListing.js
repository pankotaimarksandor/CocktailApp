import React from 'react'
import CocktailCard from './CocktailCard'
import './CocktailListing.scss'

const CocktailListing = (props) => {
    const { cocktails } = props

    return (
        <div className='cocktail-listing'>
            {cocktails.map((cocktail, i) => (
                <CocktailCard key={i} data={cocktail}/>
            ))}
        </div>
    )
}

export default CocktailListing