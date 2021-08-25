import React from 'react'
import './Profile.css'
import { Avatar } from "@material-ui/core"
import { Button } from "@material-ui/core"
import AppliedApartments from '../AppliedApartments/AppliedApartments'
import { useLocation } from 'react-router-dom'
import Btn from '../Btn'


const Profile = ({ onEdit, showEdit }) => {
    const location = useLocation()

    return (
        <div className='profile'>
            <div className='profile__tenant'>
                <h3>Tenant profile</h3>
                <div className='profile__tenantContainer'>
                    <div className='profile__intro'>
                        <Avatar className='profile__avatar'/>
                        <h3>Hi I'm Emilia and I'm <br/> looking for a new home</h3>
                    </div>
                    <div className='profile__tenantData'>
                        <ul>
                            <li>Background check</li>
                            <li>Tallinn</li>
                            <li>450€ per month</li>
                            <li>1-2 rooms</li>
                        </ul>
                        <div className='profile__buttons'>
                            <Btn
                                text={showEdit ? 'Cancel' : 'Edit'}
                                onClick={onEdit}
                            />
                            <Button className='btn' variant='outlined'>View</Button>
                            <Button className='btn' variant='outlined'>Share</Button>
                        </div>
                    </div>
                </div>
            </div>
            <AppliedApartments />
        </div>
    )
}

export default Profile
