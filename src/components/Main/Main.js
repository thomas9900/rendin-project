import React from 'react'
import './Main.css'
import Profile from '../Profile/Profile'
import SuggestedApartment from '../SuggestedApartment/SuggestedApartment'
import { Button } from "@material-ui/core"
import { useState, useEffect } from 'react'


const Main = () => {
    const [showEdit, setShowEdit] = useState(false)


    return (
        <div className='main'>
            <div className='main__viewChoiceButtons'>
                <Button className='active' variant="">Suggested apartments</Button>
                <Button variant="">Your favourites</Button>
                <Button variant="">Applied</Button>
            </div>
            <Profile
                onEdit={() => setShowEdit(!showEdit)}
                showEdit={showEdit}
            />
            <div className='main__suggestedApartments'>
                <SuggestedApartment
                    src="https://s1.kv24.ee/uploads/a1/large/08c697fe-63f2-4bea-8877-db99812df656.jpg"
                    aadress="Pikk 3, Tallinn"
                    link="View apartment on kv24.ee"
                />
                <SuggestedApartment
                    src="https://s1.kv24.ee/uploads/a1/large/08c697fe-63f2-4bea-8877-db99812df656.jpg"
                    aadress="Pikk 3, Tallinn"
                    link="View apartment on kv24.ee"
                />
                <SuggestedApartment
                    src="https://s1.kv24.ee/uploads/a1/large/08c697fe-63f2-4bea-8877-db99812df656.jpg"
                    aadress="Pikk 3, Tallinn"
                    link="View apartment on kv24.ee"
                />
            </div>
            <div className='main__suggestedApartments'>
                <SuggestedApartment
                    src="https://s1.kv24.ee/uploads/a1/large/08c697fe-63f2-4bea-8877-db99812df656.jpg"
                    aadress="Pikk 3, Tallinn"
                    link="View apartment on kv24.ee"
                />
                <SuggestedApartment
                    src="https://s1.kv24.ee/uploads/a1/large/08c697fe-63f2-4bea-8877-db99812df656.jpg"
                    aadress="Pikk 3, Tallinn"
                    link="View apartment on kv24.ee"
                />
                <SuggestedApartment
                    src="https://s1.kv24.ee/uploads/a1/large/08c697fe-63f2-4bea-8877-db99812df656.jpg"
                    aadress="Pikk 3, Tallinn"
                    link="View apartment on kv24.ee"
                />
            </div>
        </div>
    )
}

export default Main
