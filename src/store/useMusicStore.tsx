import { create } from "zustand";
import { fetchPlaylist } from "../services/musicdata";
import { getToken } from "../services/token";
import { Categories,  Item, Results } from "../types/types";
import { fetchCategories } from "../services/musiccategories";
import { featuredPlaylist } from "../services/featuredPlaylist";
import { Featured } from "../types/types2";

type res = {
    id: string,
    name: string
    icon: string
}

interface Result {
    setToken: () => Promise<void>
    items: Results[]
    defaultPlatlist: Featured
    fetchData: (genre: string) => Promise<void>
    categories: Array<res>
    fetchCategories: () => Promise<void>
    isLogin: boolean
    setLogin: (value: boolean) => void
    search: string
    setSearch: (value: string) => void
    featuredPlaylist: () =>  Promise<void>
    limit: boolean
    setLimit: () => void
    reset: () => void
    loadingDefault: boolean
}

export const useMusicStore = create<Result>((set, get) => {

    return {
        setToken: async () => {
            const token = await getToken()
            window.localStorage.setItem('spoKey', JSON.stringify(token.access_token))
        },
        items: [],
        defaultPlatlist: {},
        fetchData: async (genre: string) => {
            //obtain fetch initial data
            let { items } = get()
            const token = window.localStorage.getItem('spoKey')
            const json = await fetchPlaylist(genre, token)
            items = json.playlists.items
            set({ items })
        },
        categories: [{ id:'', icon: '', name: '' }],
        fetchCategories: async () => {
            try{
                set({ loadingDefault: true })
                const token = window.localStorage.getItem('spoKey')?.split('"')[1]
                const res: Categories = await fetchCategories(token)
                const arr: Array<res> = []
                
                res.categories.items.map((ob: Item) => {
                    const value: res = Object.assign({ id: ob.id, name: ob.name, icon: ob.icons[0].url })
                    arr.push(value)
                })

                set({ categories: arr})
            }catch(e){
                console.error(e)
            }finally{
                set({ loadingDefault: false })
            }
        },
        isLogin : false,
        setLogin: (value: boolean) => {
            set({ isLogin: value })
        },
        search: '0JQ5DAqbMKFDXXwE9BDJAr',
        setSearch: (value: string) => {
            set({ search: value })
        },
        featuredPlaylist: async () => {
            
            try{
                set({ loadingDefault: true })
                const token = window.localStorage.getItem('spoKey')?.split('"')[1]
                const res = await featuredPlaylist(token)
                set({ defaultPlatlist: res })
            }catch(e){
                console.error(e)
            }finally{
                set({ loadingDefault: false })
            }
        },
        limit: true,
        setLimit: () => {
            const { limit } = get()
            const newLimit = !limit
            set({ limit: newLimit })
        },
        reset: () => {
            set({
                limit: true
            })
        },
        loadingDefault: false
    }
})