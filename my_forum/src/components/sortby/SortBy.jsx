import React from 'react'
import { useContext } from 'react'
import { ForumContext } from '../../contexts/ForumContext'

export const SortBy = () => {
    const {handleSort} = useContext(ForumContext)
  return (
    <div>
        <h2>Sort By</h2>
        <select name="sort" id="sort" onChange={(e) => handleSort(e.target.value)}>
            <option value="all">All Posts</option>
            <option value="latest">Latest Posts</option>
            <option value="upvote">Most Upvotes</option>
        </select>
    </div>
  )
}
