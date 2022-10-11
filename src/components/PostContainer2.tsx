import React from "react";
import { postAPI } from "../services/PostService";
import PostItem from "./PostItem";


const PostContainer2 = () => {
    const {data: posts, error, isLoading} = postAPI.useFetchAllPostsQuery(100)
    return (
        <div className="posts__list">
            {isLoading && <h1>LOADING...</h1>}
            {error && <h1>ERROR</h1>}
            {/* {posts && posts?.map(post => 
                <PostItem key={post.id} post={post}></PostItem>)} */}
        </div>
    )
}

export default PostContainer2;