import { create } from "zustand";
import { getAlbum } from "../services/getAlbum";

interface Album {
    items: [],
    setAlbum: (value: string) => void
    loading: boolean
}

export const useAlbumStore = create<Album>((set) => {
    return {
        items: [],
        setAlbum: async (value: string) => {
            try{
                set({ loading: true })
                const token = window.localStorage.getItem('spoKey')?.split('"')[1]
                const res = await getAlbum(value, token)
                set({ items: res })
            }catch(e){
                console.log(e)
            }finally{
                set({ loading: false })
            }
        },
        loading: false
    }
})