import React, { useState, useContext } from 'react'
import './Profile.css'
import { Avatar, Button } from "@material-ui/core"
import AppliedApartments from '../AppliedApartments/AppliedApartments'
import Btn from '../Btn'
import EditProfile from './EditProfile/EditProfile'
import { UserContext } from '../../UserContext'
import PhotoCamera from '@material-ui/icons/PhotoCamera';


const Profile = ({ switchEdit, showEdit, savedEditChanges, applied }) => {
    const [profileInfo, setProfileInfo] = useState({})
    const [selectedFile, setSelectedFile] = useState()

    const { tenantSelections, setTenantSelections } = useContext(UserContext)

    savedEditChanges = (info) => {
        setProfileInfo(info)
        setTenantSelections(info)
    }

    const fileSelectedHandler = (e) => {
        setSelectedFile(e.target.files[0])
        console.log(e.target.files[0])
    }

    const fileUploadHandler = () => {
        
    }


    return (
        <div className='profile'>
            <div className='profile__tenant'>
                <h3>Tenant profile</h3>
                <div className='profile__tenantContainer'>
                    <div className='profile__intro'>
                        <div>
                            <div>
                                <Avatar className='profile__avatar' />
                                <input accept="image/*" className='profile__imageInput' id="icon-button-file" type="file" />
                                <label htmlFor="icon-button-file">
                                    <Button color='secondary' aria-label="upload picture" component="span">
                                        <PhotoCamera color='secondary' />
                                        Upload
                                    </Button>
                                </label>
                            </div>
                        </div>

                        <h3>Hi I'm Emilia and I'm <br/> looking for a new home</h3>
                    </div>
                    <div className='profile__tenantData'>
                        
                        {showEdit ? (<EditProfile onEdit={savedEditChanges} />)
                            : (<ul>
                                {typeof profileInfo.rooms !== 'undefined' ? (<li>{profileInfo.rooms} rooms</li>) : 
                                (<li>1-2 rooms</li>)}
                                <li>450€ per month</li>
                                <li>Tallinn</li>
                            </ul>)}

                        <div className='profile__buttons'>
                            <Btn
                                text={showEdit ? 'Back' : 'Edit'}
                                onClick={switchEdit}
                            />
                            <Button className='btn' variant='outlined'>View</Button>
                            <Button className='btn' variant='outlined'>Share</Button>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <h3>Applied apartments</h3>

                <AppliedApartments appliedApartments={applied} />
            </div>


            <div className='offers'>
                <h3>Offers recieved</h3>
                <p>No offers received yet</p>
            </div>
        </div>
    )
}

export default Profile
