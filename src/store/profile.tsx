import { create } from 'zustand'
import {immer} from 'zustand/middleware/immer'


interface ProfileState {
    userId: string | undefined,
    userInterests: string[]  | undefined,
    wantToFind: string[]  | undefined,
    name: string  | undefined,
    surname: string  | undefined,
    avatarId: string | undefined
}

interface ProfileActions {
    setData: (data:ProfileState) => void,
    updateData?: (token:string) => void
}

export const useProfileStore = create<ProfileState & ProfileActions>()(immer(set => ({
    userId: undefined,
    userInterests: undefined,
    wantToFind: undefined,
    name: undefined,
    surname: undefined,
    avatarId: undefined,
    setData: (data) => {
        
    },
    updateData: (token) => {

    }
})))