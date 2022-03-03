import React from 'react'
import { Link } from 'react-router-dom'
import './ErrorPage.scss'

const ErrorPage = () => {
    return (
        <div className='error-page'>
            Page not found!
            <Link to='/cocktail/random'>Click here to get back</Link>
        </div>
    )
}

export default ErrorPage