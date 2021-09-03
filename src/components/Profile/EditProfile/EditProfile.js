import { useState, useContext } from 'react'
import { Button } from "@material-ui/core"
import { useHistory } from "react-router-dom"


const EditProfile = ({ onEdit }) => {
    const [rooms, setRooms] = useState('')
    const [price, setPrice] = useState('')
    const [location, setLocation] = useState('')
    const history = useHistory()


    const onSubmit = (e) => {
        e.preventDefault()

        // if (!rooms) {
        //     alert('Please fill the form.')
        //     return
        // }

        onEdit({ rooms, price, location })

        setRooms('')
        setPrice('')
        setLocation('')
    }

    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Rooms</label>
                <input
                    type='Number'
                    placeholder='Number of rooms'
                    value={rooms}
                    onChange={(e) => setRooms(e.target.value)}
                />
            </div>
            <div className='form-control'>
                <label>Price</label>
                <input
                    type='text'
                    placeholder='Add price'
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                />
            </div>
            <div className='form-control'>
                <label>Location</label>
                <input
                    type='text'
                    placeholder='Choose location'
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                />
            </div>

            <Button type='submit' value='Save' className='btn' 
            // onClick={() => history.push('/main')}
            >Save</Button>
        </form>
    )
}

export default EditProfile
