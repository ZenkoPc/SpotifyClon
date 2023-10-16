import { create } from "zustand";
import { Results } from "../types/types";
import { getMusicTracks } from "../services/musicTracks";

type data = {
    id: string,
    name: string,
    owner: string,
    cover: string,
    tracks: string,
    numberTracks: number,
    desc: string,
    type: string,
}

type Tracks = {
    href: string,
    items: [],
    limit: number,
    next: null,
    offset: number,
    previous: null,
    total: number
}

interface Playlist {
    playlist: data
    handleClick: (ob: Results) => void
    currentPage: string
    setPage: (value: string) => void
    clickAction: (action: string) => void
    tracks: Tracks
    fetchTracks: (url: string) => Promise<void>
    defaultImg: string
    reset: () => void
    setDefaultImg: (img: string) => void
    loadingPlaylist: boolean
}   

export const usePlaylistStore = create<Playlist>((set) => {
    return {
        playlist: {
            id: '',
            name: '',
            owner: '',
            cover: '',
            tracks: '',
            numberTracks: 0,
            desc: '',
            type: ''
        },
        handleClick: (ob: Results) => {
            const newObj = {
                id: ob.id,
                name: ob.name,
                owner: ob.owner.display_name,
                cover: ob.images[0].url,
                tracks: ob.tracks.href,
                numberTracks: ob.tracks.total,
                desc: ob.description,
                type: ob.type
            }
            set({ playlist: newObj})
        },
        currentPage: 'index',
        setPage: (value: string) => {
            set({ currentPage: value })
        },
        clickAction: (action: string) => {
            const currentAction = action
            currentAction === 'playlist' ? set({ currentPage: 'playlist' })
            : set({ currentPage: 'index' })
        },
        tracks: {
            href: '',
            items: [],
            limit: 0,
            next: null,
            offset: 0,
            previous: null,
            total: 0
        },
        fetchTracks: async (url: string) => {
            try{
                set({ loadingPlaylist: true })
                const token = window.localStorage.getItem('spoKey').split('"')[1]
                const res = await getMusicTracks(url,token)
                set({ tracks: res })
            }catch(e){
                console.error(e)
            }finally{
                set({ loadingPlaylist: false })
            }
        },
        artist: '',
        defaultImg: 'https://www.udiscovermusic.com/wp-content/uploads/2017/08/Pink-Floyd-Dark-Side-Of-The-Moon.jpg',
        setDefaultImg: (img: string) => {
            set({ defaultImg: img })
        },
        reset: () => {
            set({
                playlist: {
                    id: '',
                    name: '',
                    owner: '',
                    cover: '',
                    tracks: '',
                    numberTracks: 0,
                    desc: '',
                    type: ''
                },
                currentPage: 'index'
            })
        },
        loadingPlaylist: false
    }
})