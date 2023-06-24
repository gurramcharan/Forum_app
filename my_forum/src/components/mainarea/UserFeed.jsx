import React from 'react'
import TimestampDisplay from '../../components/timeStampDisplay/TimestampDisplay';
import {GoComment} from "react-icons/go";
import {FiShare} from "react-icons/fi";
import {BsBookmark, BsBookmarkFill} from "react-icons/bs";
import {TbTriangleFilled, TbTriangleInvertedFilled} from "react-icons/tb";
import {Link} from 'react-router-dom';
import {useContext} from 'react';
import {ForumContext} from '../../contexts/ForumContext';
import "./UserFeed.css"

export const UserFeed = ({posts}) => {
    const {handleUpvote, handleDownvote, handleBookmark} = useContext(ForumContext);
    return (
        <div>
            <div className='feed-container'>
                {posts.map((post) => (
                    <div key={post.postId} className='flex-row feed-post'>
                        <div>
                            <button onClick={() => handleUpvote(post.postId)}><TbTriangleFilled/></button>
                            <p>{post.upvotes - post.downvotes}</p>
                            <button onClick={() => handleDownvote(post.postId)}><TbTriangleInvertedFilled/></button>
                        </div>
                        <div>
                            <div>
                                <img src={post.picUrl} alt={post.name} width="50px"/>
                                <p>Posted By</p>
                                <p>@{post.username}</p>
                                <p><TimestampDisplay createdAt={post.createdAt}/></p>
                            </div>
                            <div>
                                <h1>{post.post}</h1>
                            </div>
                            <div>
                                {post
                                    .tags
                                    .map((tag) => (
                                        <p key={tag}>{tag}</p>
                                    ))}
                            </div>
                            <div>
                                <p>{post.postDescription}</p>
                            </div>
                            <div>
                                <hr/>
                            </div>
                            <div className='flex-row'>
                                <p>

                                    <Link to={`/post/${post.postId}`}>
                                        <GoComment/>
                                    </Link>
                                </p>
                                <p>

                                    <FiShare/>
                                </p>
                                <p onClick={() => handleBookmark(post.postId)}>{post.isBookmarked
                                        ? (<BsBookmarkFill/>)
                                        : (<BsBookmark/>)}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
