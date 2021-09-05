import React, { useState } from 'react'
import { useHistory } from "react-router-dom"
import ToggleButton from '@material-ui/lab/ToggleButton'
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup'


const ViewChoiceBtns = () => {
    const [alignment, setAlignment] = useState('left')

    const handleAlignment = (event, newAlignment) => {
        setAlignment(newAlignment)
    }

    const history = useHistory()

    return (
        <div>
            <ToggleButtonGroup
                className='main__viewChoiceButtons'
                value={alignment}
                exclusive
                onChange={handleAlignment}
                aria-label="text alignment"
            >
                <ToggleButton onClick={() => history.push('/')}  value="left" aria-label="left aligned">
                    Suggested 
                </ToggleButton>
                <ToggleButton onClick={() => history.push('/favourites')} value="center" aria-label="centered">
                    Favourites
                </ToggleButton>
                <ToggleButton onClick={() => history.push('/applied')} value="right" aria-label="right aligned">
                    Applied
                </ToggleButton>
            </ToggleButtonGroup>
        </div>
    )
}

export default ViewChoiceBtns
