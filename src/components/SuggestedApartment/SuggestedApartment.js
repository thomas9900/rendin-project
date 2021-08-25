import React from 'react'
import './SuggestedApartment.css'
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder"
import { Button } from "@material-ui/core"


const SuggestedApartment = ({ src, aadress, description, link }) => {
    return (
        <div className='suggestedApartment'>
            <img src={src} alt='' />
            <div className='suggestedApartment__info'>
                <h2>{aadress}</h2>
                <table>
                    <tr className=''>
                        <th>PRICE</th>
                        <th>SIZE</th>
                        <th>ROOMS</th>
                        <th>APPLIED AT</th>
                    </tr>
                    <tr>
                        <td>450€</td>
                        <td>52 m2</td>
                        <td>2</td>
                        <td>2 days ago</td>
                    </tr>
                </table>
                <a href='#'>{link}</a>
                <FavoriteBorderIcon className='favouriteIcon' />
                <Button className='btn btnApply' variant='outlined'>Apply</Button>

            </div>
        </div>
    )
}

export default SuggestedApartment
