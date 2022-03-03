import React, { useState } from 'react'
import './SearchPage.scss'
import CocktailListing from './CocktailListing';

const SearchPage = () => {
    const [query, setQuery] = useState('')
    const [loading, setLoading] = useState(false)
    const [cocktails, setCocktails] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault()

        if(query === '') return alert('Please enter search query!')

        const url = `${process.env.REACT_APP_BACKEND}/search?name=${query}`
        
        setLoading(true)
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            }
        })
            .then(response => {
                if(response.status === 200){
                    return response.json()
                } else {
                    throw new Error('Failed to fetch')
                }
            })
            .then(cocktails => {
                setCocktails(cocktails)
                setLoading(false)
            })
            .catch(error => {
                console.log(error)
                setLoading(false)
            })
    }

    return (
        <div className='search-page'>
            <div className='search-bar'>
                <form onSubmit={handleSubmit}>
                    <input
                        type='text'
                        value={query}
                        placeholder='Search cocktail'
                        onChange={(e) => setQuery(e.target.value)}
                    />
                    <button type='submit'>Search</button>
                </form>
            </div>
            {loading && cocktails.length === 0 && <h2>Loading..</h2>}
            {!loading && cocktails.length === 0 && <h2>Coctail(s) not found</h2>}
            {!loading && cocktails.length > 0 && (
                <CocktailListing cocktails={cocktails}/>
            )}
        </div>
    )
}

export default SearchPage