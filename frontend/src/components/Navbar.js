import React, { useState } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { SidebarData, loggedData } from './SidebarData'
import './Navbar.css'
import { IconContext } from 'react-icons'
import {ProfileData} from './ProfileData'

export default function Navbar() {
    const [sidebar, setSidebar] = useState(false)
    const {isAuthenticated, logout} = useAuth0();
    const showSidebar = ()=> setSidebar(!sidebar)
    return (
        <>
            <IconContext.Provider value={{color: '#fff'}}>
            <div className="navbar">
                <Link to="#" className="menu-bars">
                    <FaIcons.FaBars onClick={showSidebar}/>
                    </Link>
                <div className="profile">
                    {isAuthenticated ? <ProfileData className="loggedIn"/> : <div className="loggedOut">You are not logged.</div>}
                </div>
            </div>
                
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className="nav-menu-items" onClick={showSidebar}>
                    <li className="navbar-toggle">
                        <Link to="#" className="menu-bars">
                            <AiIcons.AiFillCloseSquare onClick={showSidebar}/>
                        </Link>
                    </li>
                    {SidebarData.map((item, index) => {
                        return (
                            
                            <li key={index} className={item.cName}>
                                    <Link to={item.path}>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </Link> 
                                
                            </li>
                        )
                    })}
                        {isAuthenticated ?
                            
                                loggedData.map((item, index)=> {
                                    return (
                                        <li key={index} className={item.cName}>
                                            <Link to={item.path} onClick={()=> logout({returnTo:window.location.origin})}>
                                            {item.icon}
                                            <span>{item.title}</span>
                                        </Link> 
                                        
                                    </li>
                                    )
                                })
                             :
                            null
                    }
                </ul>
                </nav>
                </IconContext.Provider>
        </>
    )
}
