import React from 'react'
import {Link} from 'react-router-dom'
import {forumData} from '../../data/Data'
import "./Sidebar.css"

export const Sidebar = () => {
    return (
        <div className='side-main-container'>
            <div className='flex-column side-link-container'>
                <Link className='side-link' to="/">Home</Link>
                <Link className='side-link' to="/">Explore</Link>
                <Link className='side-link' to="/">Bookmarks</Link>
                <Link className='side-link' to="/">Profile</Link>
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
