import React from 'react'
import { Link } from 'react-router-dom'
import './CocktailCard.scss'

const CocktailCard = (props) => {
    const { data } = props

    return (
        <div className='cocktail-card'>
            <Link to={`/cocktail/details/${data.id}`}>
                {data.name}
                <img src={data.thumb} alt={data.name}/>
            </Link>
        </div>
    )
}

export default CocktailCard