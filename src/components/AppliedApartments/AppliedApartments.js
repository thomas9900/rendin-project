import React from 'react'
import './AppliedApartments.css'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'

const AppliedApartments = () => {
    return (
        <div className='appliedApartments'>
            <h3>Applied apartments</h3>
            <div className='appliedApartments__container'>
                <div>
                    <h4>Pikk 3, Tallinn</h4>
                    <ChevronRightIcon className='rightArrow' />
                </div>
                <table>
                    <tr className=''>
                        <th>PRICE</th>
                        <th>SIZE</th>
                        <th>ROOMS</th>
                        <th>APPLIED AT</th>
                        <th>STATUS</th>
                    </tr>
                    <tr>
                        <td>450€</td>
                        <td>52 m2</td>
                        <td>2</td>
                        <td>2 days ago</td>
                        <td>Waiting</td>
                    </tr>
                </table>
            </div>
            <div className='offers'>
                <h3>Offers recieved</h3>
                <p>No offers received yet</p>
            </div>

        </div>

    )
}

export default AppliedApartments
