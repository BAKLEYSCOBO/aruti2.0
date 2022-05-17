import React,{useState } from 'react';
import { Link } from 'react-router-dom';

const SidebarItem = ({item}) => {

    const [open, setOpen] = useState(false)

    if(item.childrens){
       
        return (

            <div className={open ? "sidebar-item open" : "sidebar-item"}>
            
                <div className="sidebar-title">
                    <span>
                        { item.icon && <i className={item.icon}></i> }

                       <Link to={item.title}>{item.title}</Link> 
                    </span> 
                    
                    <i className="bi-chevron-down toggle-btn" onClick={() => setOpen(!open)}></i>
                </div>
                <div className="sidebar-content">
                 { item.childrens.map((child, index) => <SidebarItem key={index} item={child} />) }
                </div>
             
            </div>
            
        )
    } else{
        return (
            <a href={item.path || "#"} className="sidebar-item plain">
            { item.icon && <i className={item.icon}></i> }
            <Link to= {item.title}>{item.title}</Link>
            </a>
        )
    }
    
}

export default SidebarItem;