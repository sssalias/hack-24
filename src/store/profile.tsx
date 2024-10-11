import { create } from 'zustand'
import {immer} from 'zustand/middleware/immer'


interface ProfileState {
    userId: string | undefined,
    userInterests: string[]  | undefined,
    wantToFind: string[]  | undefined,
    name: string  | undefined,
    surname: string  | undefined,
    avatarId: string | undefined,
    ava?: string
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
    ava: 'https://i.pravatar.cc/150?img=15',
    setData: (data) => {
        set({userId: data.userId, name: data.name, surname: data.surname})
    }
})))