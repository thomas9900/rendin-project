import React from 'react'
import { Button } from "@material-ui/core"
import { useHistory } from "react-router-dom"


const ViewChoiceBtns = () => {
    const history = useHistory()

    return (
        <div>
            <div className='main__viewChoiceButtons'>
                <Button className='active' 
                onClick={() => history.push('/')}
                >Suggested apartments</Button>
                <Button onClick={() => history.push('/favourites')}>Favourites</Button>
                <Button onClick={() => history.push('/applied')}>Applied</Button>
            </div>
        </div>
    )
}

export default ViewChoiceBtns
