import React, { Component } from 'react'
import {  NavLink, Route, Routes } from 'react-router-dom'
import Referral from '../Referral/Referral'
import Product from '../Product/Product'
import ConnectUs from '../ConnectUs/ConnectUs'
import './index.scss'

export default class Index extends Component {
  render() {
    return (
      <div id='index'>
        <div className="index_container">
          <nav className='top_nav_list'>
            <div className="top_nav_item">
              <NavLink to='/index/referral'>公司介绍</NavLink>
            </div>
            <div className="top_nav_item">
              <NavLink to='/index/product'>产品展示</NavLink>
            </div>
            <div className="top_nav_item">
              <NavLink to='/index/connectus'>联系我们</NavLink>
            </div>
          </nav>
          <div className="main">
              <Routes>
                <Route path='referral' element={<Referral/>}/>
                <Route path='product' element={<Product></Product>}/>
                <Route path='connectus' element={<ConnectUs></ConnectUs>}/>
              </Routes>
          </div>
        </div>
      </div>
    )
  }
}
