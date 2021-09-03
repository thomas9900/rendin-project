import React, { useState, useEffect } from 'react'
import './ApartmentList.css'
import SuggestedApartment from '../SuggestedApartment/SuggestedApartment'
import FavoriteIcon from "@material-ui/icons/Favorite"
import { Button, IconButton } from "@material-ui/core"
import ApplyModal from '../ApplyModal/ApplyModal'

const ApartmentList = ({ apartments, handleFavouritesClick, handleAppliedClick, favourites }) => {
    const [isFavourites, setIsFavourites] = useState([])

    useEffect(() => {
        if (favourites) (favourites.map((favourite) => {
            const newList = [...isFavourites, favourite.id]
            setIsFavourites(newList)
        }))
    }, [favourites])

    return (
        <div className='main__suggestedApartments'>
            { apartments ? apartments.map((apartment) => (
                <div key={apartment.id} id={apartment.id} className='suggestedApartment'>
                    <img src={apartment.image} alt='img' />
                    {apartment.rendin === 1 ? <img className='rendin-logo' alt='img' src='https://rendin.ee/_nuxt/img/rendin-icon-square.652607d.jpg' /> : ''}
                    <div className='suggestedApartment__info'>
                        <h2>{apartment.location}</h2>
                        <table>
                            <tbody>
                                <tr className=''>
                                    <th>PRICE</th>
                                    <th>SIZE</th>
                                    <th>ROOMS</th>
                                    <th>APPLIED AT</th>
                                </tr>
                                <tr>
                                    <td>{apartment.price}€</td>
                                    <td>{apartment.size} m2</td>
                                    <td>{apartment.rooms}</td>
                                    <td>2 days ago</td>
                                </tr>
                            </tbody>
                        </table>
                        <a href='#' target="_blank">View apartment on kv24.ee</a>
                        <IconButton
                            className='favouriteIcon'
                            color={isFavourites.includes(apartment.id) ? "secondary" : "default"}
                            onClick={() => (handleFavouritesClick(apartment))}
                        >
                            <FavoriteIcon />
                        </IconButton>
                        <ApplyModal onApply={() => handleAppliedClick(apartment)}  />
                    </div>
                </div>
            )) : ''}
        </div>
    )
}

export default ApartmentList
