import { create } from "zustand";
import { getSearch } from "../services/getSearch";
import { Root } from "../types/typesSearch";

interface Search {
    query: string
    setQuery: (value: string) => void
    loading: boolean
    resultsSearch: Root
    loadingResults: boolean
    setResults: (value: string) => void
}

export const useSearchStore = create<Search>((set) => {
    return {
        query: '',
        setQuery: (value: string) => {
            try{
                set({ loading: true })
                set({ query: value })
            }catch(e){
                console.error(e)
            }finally{
                set({ loading: false })
            }
        },
        loading: false,
        resultsSearch: {},
        setResults: async (value: string) => {
            try{
                set({ loadingResults: true })
                const token = window.localStorage.getItem('spoKey')?.split('"')[1]
                const res = await getSearch(value, token)
                set({ resultsSearch: res })
            }catch(e){
                console.error(e)
            }finally{
                set({ loadingResults: false })
            }
        },
        loadingResults: false
    }
})