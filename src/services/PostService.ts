import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react"
import { IPosts } from "../models/IPosts"

export const postAPI = createApi({
    reducerPath: 'postAPI',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:9999'}),
    tagTypes: ['Post'],
    endpoints: (build) => ({
        fetchAllPosts: build.query<IPosts[], number>({
            query: (limit: number = 5) => ({
                url: '/posts', 
                params: {
                    _limit: limit
                }
            }),
            providesTags: result => ['Post']
        }),
        createPost: build.mutation<IPosts, IPosts>({
            query: (post) => ({
                url: '/posts', 
                method: 'POST',
                body: post
            }),
            invalidatesTags: ['Post']
        }),
        updatePost: build.mutation<IPosts, IPosts>({
            query: (post) => ({
                url: `/posts/${post.id}`, 
                method: 'PUT',
                body: post
            }),
            invalidatesTags: ['Post']
        }),
        deletePost: build.mutation<IPosts, IPosts>({
            query: (post) => ({
                url: `/posts/${post.id}`, 
                method: 'DELETE',
            }),
            invalidatesTags: ['Post']
        }),
    })
})