import React from 'react'
import './Main.css'
import Profile from '../Profile/Profile'
import SuggestedApartment from '../SuggestedApartment/SuggestedApartment'
import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { UserContext } from '../../UserContext'
import ViewChoiceBtns from '../ViewChoiceBtns/ViewChoiceBtns'
import ApartmentList from '../ApartmentList/ApartmentList'
import apartments from '../../apartments2.json'
import AppliedApartments from '../AppliedApartments/AppliedApartments'

const Main = () => {
    const [allApartmentData, setAllApartmentData] = useState([])
    const [suggestedApartments, setSuggestedApartments] = useState([])
    const [favourites, setFavourites] = useState([])
    const [applied, setApplied] = useState([])
    const [tenantSelections, setTenantSelections] = useState({})
    const [showEdit, setShowEdit] = useState(false)


    useEffect(() => {
        setAllApartmentData(apartments)
        console.log('useeffect setapartments')
    }, [])
    
    useEffect(() => {
        filterSuggested()
        console.log('useeffect')
    }, [tenantSelections])


    const filterSuggested = () => {
        if (tenantSelections) {
            const filteredData = allApartmentData.filter((item) => {
                if (item.location.toLowerCase().includes(tenantSelections.location.toLowerCase())) {
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

    // const filterSuggested = (tenant) => {
    //     if (tenant) {
    //         const filteredData = allApartmentData.filter((item) => {
    //             if (item.location.toLowerCase().includes(tenant.location.toLowerCase())) {
    //                 return item;
    //             }
    //         })
    //     setAllApartmentData(filteredData)
    //     console.log(filteredData)
    //     }
    // }

    // const filters = (apartment) => {
    //     const rooms = apartment.rooms === Number(tenantSelections.rooms)
    //     const price = apartment.price === Number(tenantSelections.price)
    //     return rooms && price 
    // }

    

    return (
        <Router>
            <div className='main'>
                <ViewChoiceBtns />
                {/* <div className='main__viewChoiceButtons'>
                    <Button className='active'>Suggested apartments</Button>
                    <Button>Your favourites</Button>
                    <Button>Applied</Button>
                </div> */}
                <UserContext.Provider value={{tenantSelections,     setTenantSelections}}>
                    <Profile
                        switchEdit={() => setShowEdit(!showEdit)}
                        showEdit={showEdit}
                        // onFilter={filterSuggested}
                        applied={applied}
                    />
                </UserContext.Provider>

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
                        {/* {allApartmentData.map((item) => (
                            filters(item) ? <SuggestedApartment key={item.id} id={item.id} img={item.image} location={item.location} price={item.price} link={item.adLink} size={item.size} rooms={item.rooms} /> : ''
                        ))} */}

                        <ApartmentList 
                            apartments={suggestedApartments} 
                            handleFavouritesClick={addFavourite}
                            handleAppliedClick={addApplied}
                            favourites={favourites}
                        />
                    </Route>
                </Switch>



                <div className='main__suggestedApartments'>
                    <SuggestedApartment
                        id={1}
                        img="https://s1.kv24.ee/uploads/a1/large/08c697fe-63f2-4bea-8877-db99812df656.jpg"
                        location="Pikk 3, Tallinn"
                        link="View apartment on kv24.ee"
                        price={450}
                    />
                    <SuggestedApartment
                        id={2}
                        img="https://s1.kv24.ee/uploads/a1/large/08c697fe-63f2-4bea-8877-db99812df656.jpg"
                        location="Pikk 3, Tallinn"
                        link="View apartment on kv24.ee"
                    />
                    <SuggestedApartment
                        id={3}
                        img="https://s1.kv24.ee/uploads/a1/large/08c697fe-63f2-4bea-8877-db99812df656.jpg"
                        location="Pikk 3, Tallinn"
                        link="View apartment on kv24.ee"
                    />
                </div>
            </div>

        </Router>
    )
}

export default Main
