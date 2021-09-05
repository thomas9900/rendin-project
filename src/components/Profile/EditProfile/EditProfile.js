import { useState, useContext } from 'react'
import './EditProfile.css'
import { Button, Input } from "@material-ui/core"

const EditProfile = ({ onEdit }) => {
    const [rooms, setRooms] = useState('')
    const [price, setPrice] = useState('')
    const [location, setLocation] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()

        if (!location) {
            alert('Please choose location.')
            return
        }

        onEdit({ rooms, price, location })

        setRooms('')
        setPrice('')
        setLocation('')
    }
    
    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <Input 
                    color='primary'
                    placeholder="Rooms"
                    className='edit-input'
                    value={rooms}
                    onChange={(e) => setRooms(e.target.value)} />
            </div>
            <div className='form-control'>
                <Input
                    color='primary'
                    className='edit-input'
                    placeholder='Price'
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                />
            </div>
            <div className='form-control'>
                <Input
                    color='primary'
                    className='edit-input'
                    placeholder='Location'
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                />
            </div>
            <Button type='submit' value='Save' className='btn' 
            >Save</Button>
        </form>
    )
}

export default EditProfile
