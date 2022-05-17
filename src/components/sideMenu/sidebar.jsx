import React from 'react'
import SidebarItem from '../sideMenu/sidebarItem'
import items from '../../data/sidebar.json';
import Logo from '../../image/ARUTI HR.png'
import { Link } from 'react-router-dom';


const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='image'>
         <img src={Logo} alt='logo' className='logo'/>
      </div>
      { items.map((item, index) =>  <SidebarItem key={index} item={item} /> ) }
    </div>
  )
}

export default Sidebar