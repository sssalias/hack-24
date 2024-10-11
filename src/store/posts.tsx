import PostsService from 'src/services/PostsService'
import { create } from 'zustand'
import {immer} from 'zustand/middleware/immer'


interface PostsState {
    data: any[]
}

interface PostsActions {
    setData: (data:any[]) => void,
    updateData: (token:string) => void
}



export const usePostsStore = create<PostsState & PostsActions>()(immer(set => ({
    data: [],
    setData: (data) => {
        set({data: data})
    },
    updateData: async (token) => {
        const {data} = await PostsService.getPosts(token)
        set({data: data})
    },
})))