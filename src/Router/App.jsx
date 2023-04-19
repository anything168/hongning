import React, { Component } from 'react'
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom'
import Index from '../Index/Index'
import NotFound from '../NotFound/NotFound'

export default class App extends Component {
  render() {
    return (
      <HashRouter>
        <Routes>
            <Route path='/index' element={<Index/>}/>
            <Route path='/' element={<Navigate to='/index'/>}/>
            <Route path='*' element={<NotFound/>}/>
        </Routes>
      </HashRouter>
    )
  }
}
