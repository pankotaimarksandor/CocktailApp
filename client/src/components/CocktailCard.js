import React from 'react'
import { Link } from 'react-router-dom'
import './CocktailCard.scss'

const CocktailCard = (props) => {
    const { data } = props

    return (
        <div className='cocktail-card'>
            <Link to={`/cocktail/details/${data.id}`}>
                <div className="card-inner">
                    <div className="card-top">
                        <img src={data.thumb} alt={data.name} />
                    </div>
                    <div className="card-bottom">
                        <div className="card-info">
                            <h3>{data.name}</h3>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default CocktailCard