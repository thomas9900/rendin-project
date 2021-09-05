import React from 'react'
import './Header.css'
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone'
import { Avatar, Button } from "@material-ui/core"
import { Link } from "react-router-dom"

const Header = ({ handleLogout }) => {
    return (
        <div className='header'>
            <Link to='/'>
                <img className="header__icon" src="https://rendin.ee/_nuxt/img/rendin-logo.66b36f6.svg" alt="Rendin Logo"/>
            </Link>
            <div className='header__right'>
                <NotificationsNoneIcon />&nbsp;
                <Avatar />
                <p>&nbsp;Emilia Birch</p>
                <ExpandMoreIcon />
                <Button className='' onClick={handleLogout}>Logout</Button>
            </div>
        </div>
    )
}

export default Header
