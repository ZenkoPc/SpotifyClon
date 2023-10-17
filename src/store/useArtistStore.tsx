import { create } from "zustand";
import { ArtistAlbum, ArtistInfo, ArtistRelated, ArtistTracks } from "../types/typesArtist";
import { getArtistInfo } from "../services/getArtistInfo";
import { getArtistAlbum } from "../services/getArtistAlbum";
import { getArtistTracks } from "../services/getArtistTracks";
import { getArtistRelated } from "../services/getArtistRelated";

interface Artist {
    artistInfo: ArtistInfo
    artistAlbum: ArtistAlbum
    artistTopTracks: ArtistTracks
    artistRelated: ArtistRelated
    setArtistInfo: (value: string) => void
    loading: boolean
}

export const useArtistStore = create<Artist>((set) => {
    return {
        artistInfo: {
            external_urls: { spotify: '' },
            followers: { href: '', total: 0 },
            genres: [],
            href: '',
            id: '',
            images: [],
            name: '',
            popularity: 0,
            type: '',
            uri: ''
        },
        artistAlbum: {
            href: '',
            limit: 0,
            next: '',
            offset: 0,
            previous: '',
            total: 0,
            items: []
        },
        artistTopTracks: { 
            tracks: [] 
        },
        artistRelated: { 
            artists: [] 
        },
        setArtistInfo: async (value: string) => {
            try{
                set({ loading: true })
                const token = window.localStorage.getItem('spoKey')?.split('"')[1]
                const res = await getArtistInfo(value, token)
                set({ artistInfo: res })
                const resAlbum = await getArtistAlbum(value, token)
                set({ artistAlbum: resAlbum })
                const resTracks = await getArtistTracks(value, token)
                set({ artistTopTracks: resTracks })
                const resRelated = await getArtistRelated(value, token)
                set({ artistRelated: resRelated })
            }catch(e){
                console.error(e)
            }finally{
                set({ loading: false })
            }
        },
        loading: false
    }
})