import {createContext} from "react";
import {forumData} from "../data/Data"
import {useState} from "react";

export const ForumContext = createContext();

export const ForumProvider = ({children}) => {
    const [postData,
        setPostData] = useState(forumData.posts)

    const handleSort = (e) => {
        if (e === "latest") {
            const sortedPosts = [...postData].sort((a, b) => {
                const dateA = new Date(a.createdAt);
                const dateB = new Date(b.createdAt);
                return dateA - dateB;
            })
            setPostData(sortedPosts)
        } else if (e === "upvote") {
            const sortedUpvotes = [...postData].sort((a, b) => b.upvotes - a.upvotes)
            setPostData(sortedUpvotes)
        } else if (e === "all") {
            setPostData(forumData.posts)
        } else {
            setPostData(forumData.posts)
        }
    }

    const handleUpvote = (id) => {
        const filteredArray = postData.map((item) => {
            if (item.postId === id) {
                return {
                    ...item,
                    upvotes: item.upvotes + 1
                }
            }
            return item
        })
        setPostData(filteredArray)
    }

    const handleDownvote = (id) => {
        const filteredArray = postData.map((item) => {
            if (item.postId === id) {
                return {
                    ...item,
                    downvotes: item.downvotes + 1
                }
            }
            return item
        })
        setPostData(filteredArray)
    }

    const handleBookmark = (id) => {
        const filteredArray = postData.map((item) => {
            if (item.postId === id) {
                if (item.isBookmarked) {
                    return {
                        ...item,
                        isBookmarked: false
                    }
                } else {
                    return {
                        ...item,
                        isBookmarked: true
                    }
                }
            }
            return item
        })
        setPostData(filteredArray)
    }

    return (
        <ForumContext.Provider
            value={{
            postData,
            handleSort,
            handleUpvote,
            handleDownvote,
            handleBookmark
        }}>
            {children}
        </ForumContext.Provider>
    )
}