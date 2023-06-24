import React from 'react'
import {NavLink} from 'react-router-dom'
import {forumData} from '../../data/Data'
import "./Sidebar.css"

export const Sidebar = () => {
    return (
        <div className='side-main-container'>
            <div className='flex-column side-link-container'>
                <NavLink className='side-link' to="/">Home</NavLink>
                <NavLink className='side-link' to="/explore">Explore</NavLink>
                <NavLink className='side-link' to="/bookmarks">Bookmarks</NavLink>
                <NavLink className='side-link' to="/profile">Profile</NavLink>
            </div>
            <div className='flex-row side-profile'>
                <div>
                    <img src={forumData.picUrl} alt={forumData.name} width="50px"/>
                </div>
                <div>
                    <p>{forumData.name}</p>
                    <p>@{forumData.username}</p>
                </div>
            </div>
        </div>
    )
}
