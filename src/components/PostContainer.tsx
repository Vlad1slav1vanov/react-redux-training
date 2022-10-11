import React, { useEffect, useState } from "react";
import { IPosts } from "../models/IPosts";
import { postAPI } from "../services/PostService";
import PostItem from "./PostItem";


const PostContainer = () => {
    const [limit, setLimit] = useState(100)
    const {data: posts, error, isLoading, refetch} = postAPI.useFetchAllPostsQuery(limit)
    const [createPost, {}] = postAPI.useCreatePostMutation()
    const [updatePost, {}] = postAPI.useUpdatePostMutation()
    const [deletePost, {}] = postAPI.useDeletePostMutation()

    useEffect(() => {
        // setTimeout(() => {
        //     setLimit(3)
        // }, 2000)
    }, [])

    const handleCreate = async () => {
        const title = prompt()
        await createPost({title, body: title} as IPosts)
    }

    const handleRemove = (post: IPosts) => {
        deletePost(post)
    }

    const handleUpdate = (post: IPosts) => {
        updatePost(post)
    }

    return (
        <div className="posts__list">
            <button onClick={handleCreate}>Add new post</button>
            {isLoading && <h1>LOADING...</h1>}
            {error && <h1>ERROR</h1>}
            {posts && posts?.map(post => 
                <PostItem key={post.id} post={post} remove={handleRemove} update={handleUpdate}></PostItem>)}
        </div>
    )
}

export default PostContainer;