import React from 'react'
import './Main.css'
import Profile from '../Profile/Profile'
import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { UserContext } from '../../UserContext'
import ViewChoiceBtns from '../ViewChoiceBtns/ViewChoiceBtns'
import ApartmentList from '../ApartmentList/ApartmentList'
import apartments from '../../apartments.json'

const Main = () => {
    const [allApartmentData, setAllApartmentData] = useState([])
    const [suggestedApartments, setSuggestedApartments] = useState([])
    const [favourites, setFavourites] = useState([])
    const [applied, setApplied] = useState([])
    const [tenantSelections, setTenantSelections] = useState({})
    const [showEdit, setShowEdit] = useState(false)

    useEffect(() => {
        setAllApartmentData(apartments)
    }, [])
    
    useEffect(() => {
        filterSuggested()
    }, [tenantSelections])

    const filterSuggested = () => {
        if (tenantSelections) {
            const filteredData = allApartmentData.filter((item) => {
                if (item.location.toLowerCase().includes(tenantSelections.location.toLowerCase()) && ((item.rooms == tenantSelections.rooms) || (tenantSelections.rooms == '')) && ((item.price == tenantSelections.price) || (tenantSelections.price == ''))) {
                    return item
                }
            })
            setSuggestedApartments(filteredData)
        }
    }

    const addFavourite = (apartment) => {
        const newFavouriteList = [...favourites, apartment]
        setFavourites(newFavouriteList)
    }

    const addApplied = (apartment) => {
        const newAppliedList = [...applied, apartment]
        setApplied(newAppliedList)
    }

    return (
        <Router>
            <ViewChoiceBtns />
            <div className='main'>
                <Switch>
                    <Route path='/applied'>
                        <ApartmentList
                            apartments={applied}
                        />
                    </Route>
                    <Route path='/favourites'>
                        <ApartmentList
                            apartments={favourites}
                            handleAppliedClick={addApplied}
                        />
                    </Route>
                    <Route path='/'>
                        <ApartmentList 
                            apartments={suggestedApartments} 
                            handleFavouritesClick={addFavourite}
                            handleAppliedClick={addApplied}
                            favourites={favourites}
                        />
                    </Route>
                </Switch>
                <UserContext.Provider value={{ tenantSelections, setTenantSelections }}>
                    <Profile
                        switchEdit={() => setShowEdit(!showEdit)}
                        showEdit={showEdit}
                        applied={applied}
                    />
                </UserContext.Provider>
            </div>
        </Router>
    )
}

export default Main
