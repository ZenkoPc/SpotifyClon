import { create } from "zustand";
import { Item, Podcast, Podcasts } from "../types/typesPodcast";
import { getPodcastCategory } from "../services/podcastCategory";
import { SelectedPodcast } from "../services/selectedPodcast";
import { getEpisode } from "../services/getEpisode";

interface PodcastInfo {
    loading: boolean
    getPodcasts: (value: string) => Promise<Podcast>
    podcastStyle: string
    setDefaultStyle: (value: string) => void
    setPodcastsStyle: (value: string, actual: string) => string
    podcastSelected: Podcasts
    setPodcastSelected: (value: string) => Promise<void>
    modalImg: string
    setModalImg: (value: string) => void
    limit: boolean,
    setLimit: (value: boolean) => void
    selectedEpisode: Item
    setEpisode: (value: Item) => void
    setSelectedEpisode: (value: string) => void
    categorySelected: { img: string, search: string }
    setCategoryValues: (value: string, search: string) => void
}

export const usePodcastStore = create<PodcastInfo>((set) => {
    return {
        loading: true,
        getPodcasts: async (value: string) => {
            try{
                set({ loading: true })
                const token = window.localStorage.getItem('spoKey')?.split('"')[1]
                const res = await getPodcastCategory(value,token)
                return res
            }catch(e){
                console.error(e)
            }finally{
                set({ loading: false })
            }
        },
        podcastStyle: 'none',
        setDefaultStyle: (value: string) => {
            set({ podcastStyle: value })
        },
        setPodcastsStyle: (value: string, actual: string) => {
            if(actual === 'none') return 'flex flex-col gap-6'

            if(value === actual){
                return 'flex flex-col gap-6'
            }else{
                return 'hidden'
            }
        },
        podcastSelected: {},
        setPodcastSelected: async (value: string) => {
            try{
                set({ loading: true })
                const token = window.localStorage.getItem('spoKey')?.split('"')[1]
                const res = await SelectedPodcast(value, token)
                set({ podcastSelected: res })
            }catch(e){
                console.error(e)
            }finally{
                set({ loading: false })
            }
        },
        modalImg: '',
        setModalImg: (value: string) => {
            set({ modalImg: value })
        },
        limit: true,
        setLimit: (value: boolean) => {
            set({ limit: value })
        },
        selectedEpisode: {},
        setEpisode: async (value: Item) => {
            set({ selectedEpisode: value })
        },
        setSelectedEpisode: async (value: string) => {
            try{
                set({ loading: true })
                const token = window.localStorage.getItem('spoKey')?.split('"')[1]
                const res = await getEpisode(value, token)
                set({ selectedEpisode: res })
            }catch(e){
                console.log(e)
            }finally{
                set({ loading: false })
            }
        },
        categorySelected: { img: '', search: '' },
        setCategoryValues: (value: string, search: string) => {
            set({ categorySelected: { img: value, search: search } })
        }
    }
})