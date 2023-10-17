import { create } from "zustand";

interface actions {
    loginModalState: boolean
    setLoginState: (value: boolean) => void
    libraryOptionsState: boolean
    setLibraryOptions: (value: boolean) => void 
    buttonLanguage: string
    setButtonLanguage: (value: string) => void
    languageModal: boolean
    setLanguageModal: (value: boolean) => void
    listenLoginModal: boolean
    setListenLoginModal: (value: boolean) => void
    listenPodcastModal: boolean
    setListenPodcastModal: (value: boolean) => void
    noLoginMadeModal: boolean
    setNoLoginMadeModal: (value: boolean) => void
    selectedFilter: string
    setSelectedFilter: (value: string) => void
    styleHeader: boolean
    setHeaderStyle: (value: boolean) => void
    menuState: boolean
    setMenuState: (value: boolean) => void
}

export const useButtonsStore = create<actions>((set) => {
    return {
        loginModalState: false,
        setLoginState: (value: boolean) => {
            set({ loginModalState: value })
        },
        libraryOptionsState: false,
        setLibraryOptions: (value: boolean) => {
            set({ libraryOptionsState: value })
        },
        buttonLanguage: 'Español de España',
        setButtonLanguage: (value: string) => {
            set({ buttonLanguage: value })
        },
        languageModal: false,
        setLanguageModal: (value: boolean) => {
            set({ languageModal: value })
        },
        listenLoginModal: false,
        setListenLoginModal: (value: boolean) => {
            set({ listenLoginModal: value })
        },
        listenPodcastModal: false,
        setListenPodcastModal: (value: boolean) => {
            set({ listenPodcastModal: value })
            console.log(value)
        },
        noLoginMadeModal: false,
        setNoLoginMadeModal: (value: boolean) => {
            set({ noLoginMadeModal: value })
        },
        selectedFilter: 'all',
        setSelectedFilter: (value: string) => {
            set({ selectedFilter: value })
        },
        styleHeader: true,
        setHeaderStyle: (value: boolean) => {
            set({ styleHeader: value })
        },
        menuState: true,
        setMenuState: (value: boolean) => {
            set({ menuState: value })
        }
    }
})