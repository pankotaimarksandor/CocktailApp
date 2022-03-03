import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import ErrorPage from './components/ErrorPage'
import Header from './components/Header'
import RandomPage from './components/RandomPage'
import SearchPage from './components/SearchPage'
import CocktailDetails from './components/CocktailDetails'
import './scss/styles.scss'

const App = () => {
    return (
        <div className='app'>
            <Router>
                <Header />
                
                <Routes>
                    <Route index exact element={ <Navigate to='/cocktail/random'/> }/>
                    <Route path='/cocktail/random' element={ <RandomPage /> }/>
                    <Route path='/cocktail/search' element={ <SearchPage /> }/>
                    <Route path='/cocktail/details/:id' element={ <CocktailDetails /> }/>
                    <Route path='*' element={ <ErrorPage /> }/>
                </Routes>
            </Router>
        </div>
    )
}

export default App