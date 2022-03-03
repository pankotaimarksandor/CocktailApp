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
                <div>
                    {cocktail.name}
                </div>
            )}
        </div>
    )
}

export default CocktailDetails