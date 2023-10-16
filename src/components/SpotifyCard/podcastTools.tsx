import { usePlaylistStore } from "../../store/usePlaylistStore"
import { usePodcastStore } from "../../store/usePodcastStore"

export const PodcastTools = () => {

    const setPodcast = usePlaylistStore(store => store.setPage)
    const setStyles = usePodcastStore(store => store.setDefaultStyle)
    const setLimit = usePodcastStore(store => store.setLimit)

    const handleClick = () => {
        setPodcast('podcasts')
        setStyles('none')
        setLimit(true)
    }

    return (
        <div className="bg-secondary p-4 ml-2 mt-6 rounded-lg text-white">
            <h3 className="font-bold">
                Encuentra pódcast que quieras seguir
            </h3>
            <p className="mt-2.5 text-sm font-medium">
                Te avisaremos cuando salgan nuevos episodios.
            </p>
            <button onClick={handleClick} className="bg-white mt-5 text-black hover:bg-overWhite text-sm py-1.5 px-4 transition-all hover:scale-105 rounded-full font-bold">
                <span>Explorar pódcast</span>
            </button>
        </div>
    )
}