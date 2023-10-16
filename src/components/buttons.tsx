import { NextIcon } from "../icons/next"
import { PrevIcon } from "../icons/prev"
import { usePlaylistStore } from "../store/usePlaylistStore"

export const Buttons = () => {
    const currentPage = usePlaylistStore(store => store.currentPage)
    const clickAction = usePlaylistStore(store => store.clickAction)
    const results = usePlaylistStore(store => store.playlist)
    
    return (
        <div className="flex gap-5 p-5">
            <button className="hover:border-greaterGreen-700 hover:cursor-pointer hover:bg-gray-950 rounded-full bg-gray-800 p-2 border-2 border-greaterGreen-500" onClick={() => clickAction('index')} disabled={currentPage === 'index' || results?.id === undefined}>
                <PrevIcon />
            </button>
            <button className="hover:border-greaterGreen-700 hover:cursor-pointer hover:bg-gray-950 rounded-full bg-gray-800 p-2 border-2 border-greaterGreen-500" onClick={() => clickAction('playlist')} disabled={currentPage === 'playlist' || results?.id === undefined}>
                <NextIcon />
            </button>
        </div>
    )
}