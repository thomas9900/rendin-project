import React from 'react'
import './App.css'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import apartments from './apartments.json'

const App = () => {
  console.log(apartments)
  return (
    <div className='app'>
      <Router>
        <Header />
        <><hr /></>
        <Main />
      </ Router>
    </div>
  )
}

export default App
