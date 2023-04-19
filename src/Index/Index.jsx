import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class Index extends Component {
  render() {
    return (
      <div id='index'>
        <div className="index_container">
          <nav className='top_nav_list'>
            <div className="top_nav_item">
              <NavLink to=''>公司介绍</NavLink>
            </div>
            <div className="top_nav_item">
              <NavLink to=''>产品展示</NavLink>
            </div>
            <div className="top_nav_item">
              <NavLink to=''>联系我们</NavLink>
            </div>
          </nav>
          <div className="main">
            <p>浙江鸿宁轴承科技有限公司创建于2010年，是一家专注于汽车轮毂轴承、轮毂单元的制造型企业。

              我们拥有雄厚的技术实力，先进的生产设备，精密的检测设施，并通过ISO/IS16949:2009国际质量管理体系认证，产品经权威机构检测，性能达到并超过国家标准。企业为实现全面自动化而不断努力，依托当地的资源优势以科技进步为主导，坚持走科技兴企的道路，不断提高产品质量。

              鸿宁坚信细节决定成败，品质成就未来，相信通过彼此的交流，能够促进大家的合作与发展。</p>
          </div>
        </div>
      </div>
    )
  }
}
