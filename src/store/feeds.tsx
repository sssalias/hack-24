import FeedsService from 'src/services/FeedsService'
import { create } from 'zustand'
import {immer} from 'zustand/middleware/immer'


interface FeedsState {
    data: any[]
}

interface FeedsActions {
    setData: (data:any[]) => void,
    updateData: (token:string) => void
}



export const useFeedsStore = create<FeedsState & FeedsActions>()(immer(set => ({
    data: [],
    setData: (data) => {
        set({data: data})
    },
    updateData: async (token) => {
        const {data} = await FeedsService.getFeeds(token)
        set({data: data})
    },
})))