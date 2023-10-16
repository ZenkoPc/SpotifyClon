import { FolderIcon } from "../../icons/Folder"
import { LibraryIcon } from "../../icons/library"
import { PlaylistIcon } from "../../icons/playlist"
import { useButtonsStore } from "../../store/useButtonsStore"
import { CreatePlaylist } from "./createPlaylist"
import { PodcastTools } from "./podcastTools"

export const PlaylistTools = () => {
    const state = useButtonsStore(store => store.libraryOptionsState)
    const setState = useButtonsStore(store => store.setLibraryOptions)
    const setLoginState = useButtonsStore(store => store.setLoginState)

    const styles = state 
    ? 'absolute block bg-overHighGray font-medium text-white -bottom-[90px] text-sm shadow-xl rounded-md -right-[205px] hover:cursor-pointer p-1 z-50'
    : 'absolute hidden bg-overHighGray font-medium text-white -bottom-[90px] text-sm shadow-xl rounded-md -right-[205px] hover:cursor-pointer p-1'

    const handleClick = () => {
        setState(!state)
        setLoginState(false)
    }

    const handleOption = () => {
        setLoginState(true)
        setState(!state)
    }

    return (
        <>
            <div className=" flex relative justify-between pl-6">
                <button className="flex gap-3 items-center transition-all text-primaryGray font-bold hover:text-white">
                    <LibraryIcon />
                    <span>Tu biblioteca</span>
                </button>
                <button onClick={handleClick} className="text-primaryGray transition-all font-semithin hover:text-white rounded-full px-2 hover:bg-primary">
                    <span className="text-3xl">+</span>
                </button>
                <div className={styles}>
                    <ul>
                        <li onClick={handleOption} className="mx-1 px-4 py-2 flex gap-2 hover:pointer items-center hover:bg-overGray">
                            <PlaylistIcon />
                            Crear una nueva lista
                        </li>
                        <li onClick={handleClick} className="mx-1 flex px-4 py-2 hover:cursor-pointer hover:bg-overGray gap-2 items-center">
                            <FolderIcon />
                            Crear una carpeta de listas
                        </li>
                    </ul>
                </div>
            </div>
            <div className="h-[200px] sm:h-[400px] overflow-scroll overflow-x-hidden overflow-y-hidden">
                <CreatePlaylist />
                <PodcastTools />
            </div>
        </>
    )
}