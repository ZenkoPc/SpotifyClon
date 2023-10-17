import { MenuSpotifyIcon } from "../../icons/menuSpotify"
import { SearchIcon } from "../../icons/search"
import { SpotifyLogoRes } from "../../icons/spotifyLogoRes"
import { useButtonsStore } from "../../store/useButtonsStore"
import { usePlaylistStore } from "../../store/usePlaylistStore"
import { useSearchStore } from "../../store/useSearchStore"
import debounce from 'just-debounce-it'

export const Header = () => {

    const setMenu = useButtonsStore(store => store.setMenuState)
    const reset = usePlaylistStore(store => store.reset)
    const setPage = usePlaylistStore(store => store.setPage)
    const page = usePlaylistStore(store => store.currentPage)
    const setQuery = useSearchStore(store => store.setQuery)

    const handleChange = debounce((e) => {
        setQuery(e.target.value)
    }, 500)

    return (
        <div className="text-white h-16 z-50 flex justify-between items-center px-5 bg-black border-b-[1px] border-overGray">
            <div onClick={reset} className="flex cursor-pointer justify-center items-center">
                <SpotifyLogoRes />
            </div>
            <div className="flex gap-4 items-center md:gap-7">
                <div className="flex gap-2 md:gap-6 items-center">
                    <button onClick={() => { setPage('search') }}>
                        <SearchIcon />
                    </button>
                    <a href="" className={page === 'search' ? 'hidden' : "bg-white hover:bg-overWhite transition-all text-black py-2 cursor-pointer px-4 rounded-full font-bold uppercase text-xs xs:text-sm"}>
                        Abrir La Aplicacion
                    </a>
                    <input onChange={handleChange} type="text" placeholder="¿Que te apetece escuchar?" className={ page === 'search' ? "text-sm px-10 py-2.5 rounded-full bg-overHighGray text-white" : 'hidden' } />
                </div>
                <button onClick={() => { setMenu(false) }}>
                    <MenuSpotifyIcon />
                </button>
            </div>
        </div>
    )
}