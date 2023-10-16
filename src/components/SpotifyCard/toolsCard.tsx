import { HomeIcon } from "../../icons/home"
import { SearchIcon } from "../../icons/search"
import { SpotifyFullIcon } from "../../icons/spotifyfull"
import { useButtonsStore } from "../../store/useButtonsStore"
import { useMusicStore } from "../../store/useMusicStore"
import { usePlaylistStore } from "../../store/usePlaylistStore"
import { useSearchStore } from "../../store/useSearchStore"

export const ToolsCard = () => {
    const reset = useMusicStore(store => store.reset)
    const dataReset = usePlaylistStore(store => store.reset)
    const setPage = usePlaylistStore(store => store.setPage)
    const setCategories = useMusicStore(store => store.fetchCategories)
    const setQuery = useSearchStore(store => store.setQuery)
    const setHeaderStyle = useButtonsStore(store => store.setHeaderStyle)

    const handleClick = () => {
        reset()
        dataReset()
    }

    const handleSearch = () => {
        setPage('search')
        setCategories()
        setQuery('')
        setHeaderStyle(true)
    }

    return (
        <div className=" flex flex-col justify-between h-full gap-4 py-4">
            <a className=" p-1" href="#" onClick={handleClick}>
                <SpotifyFullIcon />
            </a>
            <div className=" p-1">
                <button onClick={handleClick} className="text-primaryGray transition-all flex gap-5 hover:text-white">
                    <HomeIcon />
                    <span className=" font-bold text-base tracking-wide">Inicio</span>
                </button>
            </div>
            <div className=" p-1">
                <button onClick={handleSearch} className="text-primaryGray transition-all flex gap-5 hover:text-white">
                    <SearchIcon />
                    <span className=" font-bold text-base tracking-wide">Buscar</span>
                </button>
            </div>
        </div>
    )
}