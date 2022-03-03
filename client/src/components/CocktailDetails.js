import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import './CocktailDetails.scss'

const CocktailDetails = () => {
    const { id } = useParams()
    const [loading, setLoading] = useState(false)
    const [cocktail, setCocktail] = useState({})

    useEffect(() => {
        setLoading(true)
        const url = `${process.env.REACT_APP_BACKEND}/${id}`
        fetch(url)
            .then(response => {
                if(response.status === 200){
                    return response.json()
                } else {
                    throw new Error('Failed to fetch')
                }
            })
            .then(cocktail => {
                setCocktail(cocktail)
                console.log(cocktail)
                setLoading(false)
            })
            .catch(error => {
                console.log(error)
                setLoading(false)
            })
    }, [id])


    return (
        <div className='cocktail-details'>
            {loading && Object.keys(cocktail).length === 0 && <h2>Loading..</h2>}
            {!loading && Object.keys(cocktail).length > 0 && (
                <>
                    <div className="section-left">
                        <div className="title">{cocktail.name}</div>
                        <div className="cocktail-info">
                            <div>
                                <span>Ingredients:</span>
                                <ul>
                                    {cocktail.ingredients.map((ingredient, i) => (
                                        <li key={i}>{ingredient}</li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <span>Measures:</span>
                                <ul>
                                    {cocktail.measures.map((measure, i) => (
                                        <li key={i}>{measure}</li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <span>Instructions:</span><br/>
                                <span>{cocktail.instructions}</span>
                            </div>
                        </div>
                    </div>
                <div className="section-right">
                    <img src={cocktail.thumb} alt={cocktail.name} />
                </div>
              </>
            )}
        </div>
    )
}

export default CocktailDetails