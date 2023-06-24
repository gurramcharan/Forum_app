import React from 'react'
import {useContext} from 'react'
import {useParams} from 'react-router-dom'
import {ForumContext} from '../contexts/ForumContext'
import {UserFeed} from '../components/mainarea/UserFeed'
import TimestampDisplay from '../components/timeStampDisplay/TimestampDisplay'
import {GoComment} from "react-icons/go";
import {FiShare} from "react-icons/fi";
import {AiOutlineHeart} from "react-icons/ai";
import {BsArrowLeft} from "react-icons/bs";
import {Link} from 'react-router-dom'

import "./CommentPage.css"

export const CommentPage = () => {
    const {postId} = useParams()
    const {postData} = useContext(ForumContext)
    const singlePost = postData.filter((item) => item.postId === postId)
    return (
        <div>
            <div className='flex-row'>
                <Link to="/"><BsArrowLeft/></Link>
                <p>Posts</p>
            </div>
            <div>
                <UserFeed posts={singlePost}/>
            </div>
            <div className='feed-container'>
                {singlePost.map((itm) => (
                    <div key={itm.postId}>
                        {itm
                            .comments
                            .map((com) => (
                                <div key={com.commentId} className='feed-post'>
                                    <div className='flex-row'>
                                        <div>
                                            <img src={com.picUrl} alt="" width="50px"/>
                                        </div>
                                        <div >
                                            <div className='flex-row'>
                                                <p>{com.name}</p>
                                                <p>{com.username}</p>
                                                <p><TimestampDisplay createdAt={com.createdAt}/></p>
                                            </div>
                                            <div className='flex-row'>
                                                <p>Replying to</p>
                                                <p>@{itm.username}</p>
                                            </div>
                                            <div className='flex-row'>
                                                <p>{com.comment}</p>
                                            </div>
                                            <div className='flex-row'>
                                                <AiOutlineHeart/>
                                                <GoComment/>
                                                <FiShare/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                    </div>
                ))}
            </div>
        </div>
    )
}
