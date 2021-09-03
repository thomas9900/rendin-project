import React from 'react'
import './SuggestedApartment.css'
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder"
import { Button, IconButton } from "@material-ui/core"


const SuggestedApartment = ({ id, img, location, price, link, size, rooms, favourited }) => {
    
    return (
        <div className='suggestedApartment'>
            <img src={img} alt='Image' />
            <div className='suggestedApartment__info'>
                <h2>{location}</h2>
                <table>
                    <tbody>
                        <tr className=''>
                            <th>PRICE</th>
                            <th>SIZE</th>
                            <th>ROOMS</th>
                            <th>APPLIED AT</th>
                        </tr>
                        <tr>
                            <td>{price}€</td>
                            <td>{size} m2</td>
                            <td>{rooms}</td>
                            <td>2 days ago</td>

                        </tr>
                    </tbody>
                </table>

                <a href={link} target="_blank">View apartment on kv24.ee</a>
                <IconButton className='favouriteIcon' color='secondary' onClick={() => (favourited = id, console.log(favourited)) }><FavoriteBorderIcon />
                </IconButton>
                
                <Button className='btn btnApply' variant='outlined'>Apply</Button>

            </div>
        </div>
    )
}

export default SuggestedApartment
