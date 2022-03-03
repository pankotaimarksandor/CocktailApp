import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import './Header.scss'

const Header = () => {
    return (
        <header>
            <Link to='/cocktail/random'>
                <div className='title'>Cocktail App</div>
            </Link>
            <div className='links'>
                <NavLink to='/cocktail/random'>Random</NavLink>
                <NavLink to='/cocktail/search'>Search</NavLink>
            </div>
        </header>
    )
}

export default Header