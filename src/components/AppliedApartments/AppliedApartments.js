import React from 'react'
import './AppliedApartments.css'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'

const AppliedApartments = ({ appliedApartments }) => {

    
    return (
        <div className='appliedApartments'>
            {appliedApartments.map((appliedApartment) => (
            <div className='appliedApartments__container' key={appliedApartment.id}>
                <div>
                    <h4>{appliedApartment.address}</h4>
                    <ChevronRightIcon className='rightArrow' />
                </div>
                <table>
                    <tbody>
                        <tr className=''>
                            <th>PRICE</th>
                            <th>SIZE</th>
                            <th>ROOMS</th>
                            <th>APPLIED AT</th>
                            <th>STATUS</th>
                        </tr>
                        <tr>
                            <td>{appliedApartment.price}€</td>
                            <td>{appliedApartment.size}m2</td>
                            <td>{appliedApartment.rooms}</td>
                            <td>0 days ago</td>
                            <td>Waiting</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            ))}


        </div>

    )
}

export default AppliedApartments
