import React from 'react'
import { NavLink } from 'react-router-dom'
import './Header.scss'

const Header = () => {
    return (
        <header>
            <NavLink to='/cocktail/random'>Random</NavLink>
            <NavLink to='/cocktail/search'>Search</NavLink>
        </header>
    )
}

export default Header