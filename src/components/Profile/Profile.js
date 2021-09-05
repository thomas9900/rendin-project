import React, { useState, useContext } from 'react'
import './Profile.css'
import { Avatar, Button, Tooltip  } from "@material-ui/core"
import AppliedApartments from '../AppliedApartments/AppliedApartments'
import Btn from '../Btn'
import EditProfile from './EditProfile/EditProfile'
import { UserContext } from '../../UserContext'
import ImageUploading from 'react-images-uploading'

const Profile = ({ switchEdit, showEdit, savedEditChanges, applied }) => {
    const [images, setImages] = useState([])

    const { tenantSelections, setTenantSelections } = useContext(UserContext)

    savedEditChanges = (info) => {
        setTenantSelections(info)
    }

    const onChange = (imageList) => {
        setImages(imageList)
    }

    return (
        <div className='profile'>
            <div className='profile__tenant'>
                <h3>Tenant profile</h3>
                <div className='profile__tenantContainer'>
                    <div className='profile__intro'>
                        <div>
                            <div>
                                <div className="">
                                    <ImageUploading
                                        value={images}
                                        onChange={onChange}
                                        dataURLKey="data_url"
                                    >
                                        {({
                                            imageList,
                                            onImageUpload,
                                        }) => (
                                            <div className="upload__image-wrapper">
                                                <Tooltip title='Edit profile picture'>
                                                    <Avatar onClick={onImageUpload}>
                                                        {imageList.map((image, index) => (
                                                            <div key={index} className="image-item">
                                                                <img src={image['data_url']} alt="" width="70" />
                                                            </div>
                                                        ))}
                                                    </Avatar>
                                                </Tooltip>
                                            </div>
                                        )}
                                    </ImageUploading>
                                </div>
                            </div>
                        </div>
                        <h3>Hi I'm Emilia and I'm <br/> looking for a new home</h3>
                    </div>
                    <div className='profile__tenantData'>
                        {showEdit ? (<EditProfile onEdit={savedEditChanges} />)
                            : (<ul>
                                <li>Rooms - {tenantSelections.rooms ? tenantSelections.rooms : ''}</li>
                                <li>Price - {tenantSelections.price ? tenantSelections.price : ' '} € per month</li>
                                <li>Location - {tenantSelections.location ? tenantSelections.location : ''}</li>
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
