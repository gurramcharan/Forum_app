import React from 'react'
import { UserFeed } from '../components/mainarea/UserFeed'
import { useContext } from 'react'
import { ForumContext } from '../contexts/ForumContext'
import { SortBy } from '../components/sortby/SortBy'
import { Sidebar } from '../components/sidebar/Sidebar'
import "./HomePage.css"

export const HomePage = () => {
    const {postData} = useContext(ForumContext)
  return (
    <div>
        <div className='flex-row home-layout'>
            <div>
              <Sidebar />
            </div>
            <div>
                <UserFeed posts={postData} />
            </div>
            <div>
              <SortBy />
            </div>
        </div>
        <div>

        </div>
    </div>
  )
}
