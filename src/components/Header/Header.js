import React from 'react'
import './Header.css'
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone'
import { Avatar } from "@material-ui/core"
import { Link } from "react-router-dom"

const Header = () => {
    return (
        <div className='header'>
            <Link to='/'>
                <img className="header__icon" src="https://rendin.ee/_nuxt/img/rendin-logo.66b36f6.svg" alt="Rendin Logo"/>
            </Link>

            <div className='header__right'>
                <NotificationsNoneIcon />
                <Avatar />
                <p>Emilia Birch</p>
                <ExpandMoreIcon />
            </div>

        </div>
    )
}

export default Header
