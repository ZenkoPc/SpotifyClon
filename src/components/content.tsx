import { useMusicStore } from "../store/useMusicStore"
import { usePlaylistStore } from "../store/usePlaylistStore"
import { PlaylistReactive } from "./SpotifyLogic/playlist"
import { DefaultMain } from "./SpotifyMain/defaultMain"
import { TopTools } from "./SpotifyMain/topHeader"
import { Podcasts } from "./podcasts"
import { Podcast } from "./SpotifyMain/podcastInside"
import { Loading } from "./loading"
import { Episode } from "./SpotifyMain/episode"
import { PodcastCategory } from "./SpotifyMain/podcastCategory"
import { Search } from "./SpotifyMain/search"
import { useButtonsStore } from "../store/useButtonsStore"
import { Artist } from "./SpotifyMain/artist"
import { Album } from "./SpotifyMain/album"

export const Content = () => {

    const page = usePlaylistStore(store => store.currentPage)
    const loadingDefault = useMusicStore(store => store.loadingDefault)
    const setSelectedFilter = useButtonsStore(store => store.setSelectedFilter)
    const filter = useButtonsStore(store => store.selectedFilter)
    const headerStyle = useButtonsStore(store => store.styleHeader)

    const handleClick = (value: string) => {
        setSelectedFilter(value)
    }

    return (
        <>
            {loadingDefault && <Loading />}
            {!loadingDefault && page === 'index' && 
            <div className="h-full rounded-lg overflow-hidden relative">
                <div className="absolute hidden lg:block h-16 top-0 w-full z-20">
                    <TopTools />
                </div>
                <div className="h-full pt-8 lg:pt-16 overflow-hidden bg-overBlack ">
                    <DefaultMain />
                </div>
            </div>}
            {!loadingDefault && page === 'playlist' && 
            <div className="h-full rounded-lg relative">
                <div className="hidden lg:flex sticky h-16 top-0 w-full z-20">
                    <TopTools />
                </div>
                <div className="h-full overflow-x-hidden overflow-scroll">
                    <PlaylistReactive />
                </div>
            </div>}
            {!loadingDefault && page === 'podcasts' && 
            <div className=" h-full rounded-lg relative">
                <div className="sticky h-16 top-0 w-full hidden lg:block z-20">
                    <TopTools />
                </div>
                <div className="h-full overflow-x-hidden overflow-scroll">
                    <Podcasts />
                </div>
            </div>}
            {!loadingDefault && page === 'podcast' && 
            <div className=" h-full rounded-lg relative">
                <div className="absolute h-16 top-0 w-full hidden lg:block z-50">
                    <TopTools />
                </div>
                <div className="h-full overflow-x-hidden overflow-scroll">
                    <Podcast />
                </div>
            </div>}
            {!loadingDefault && page === 'episode' && 
            <div className=" h-full rounded-lg relative">
                <div className="absolute h-16 top-0 w-full hidden lg:block z-50">
                    <TopTools />
                </div>
                <div className="h-full overflow-x-hidden overflow-scroll">
                    <Episode />
                </div>
            </div>}
            {!loadingDefault && page === 'podcastResult' && 
            <div className=" h-full rounded-lg relative">
                <div className="absolute h-16 top-0 w-full hidden lg:block z-50">
                    <TopTools />
                </div>
                <div className="h-full overflow-x-hidden overflow-scroll">
                    <PodcastCategory />
                </div>
            </div>}
            {!loadingDefault && page === 'search' && 
            <div className=" h-full rounded-lg relative">
                <div className={headerStyle ? 'absolute bg-overBlack pb-2 h-28 top-0 w-full hidden lg:flex flex-col z-50' : 'absolute pb-2 h-28 top-0 w-full hidden lg:flex flex-col z-50'}>
                    <TopTools />
                    <div className={headerStyle ? 'flex gap-2 ml-6 text-white' : 'hidden'}>
                        <button disabled={filter === 'all'} onClick={() => handleClick('all')} className={filter === 'all' ? 'bg-white text-black px-3 py-1 rounded-full font-semibold text-sm':'bg-overHighGray hover:bg-secondary px-3 py-1 rounded-full font-semibold text-sm'}>
                            Todo
                        </button>
                        <button disabled={filter === 'artists'} onClick={() => handleClick('artists')} className={filter === 'artists' ? 'bg-white text-black px-3 py-1 rounded-full font-semibold text-sm':'bg-overHighGray hover:bg-secondary px-3 py-1 rounded-full font-semibold text-sm'}>
                            Artistas
                        </button>
                        <button disabled={filter === 'songs'} onClick={() => handleClick('songs')} className={filter === 'songs' ? 'bg-white text-black px-3 py-1 rounded-full font-semibold text-sm':'bg-overHighGray hover:bg-secondary px-3 py-1 rounded-full font-semibold text-sm'}>
                            Canciones
                        </button>
                        <button disabled={filter === 'lists'} onClick={() => handleClick('lists')} className={filter === 'lists' ? 'bg-white text-black px-3 py-1 rounded-full font-semibold text-sm':'bg-overHighGray hover:bg-secondary px-3 py-1 rounded-full font-semibold text-sm'}>
                            Listas
                        </button>
                        <button disabled={filter === 'albums'} onClick={() => handleClick('albums')} className={filter === 'albums' ? 'bg-white text-black px-3 py-1 rounded-full font-semibold text-sm':'bg-overHighGray hover:bg-secondary px-3 py-1 rounded-full font-semibold text-sm'}>
                            Albumes
                        </button>
                        <button disabled={filter === 'podcasts'} onClick={() => handleClick('podcasts')} className={filter === 'podcasts' ? 'bg-white text-black px-3 py-1 rounded-full font-semibold text-sm':'bg-overHighGray hover:bg-secondary px-3 py-1 rounded-full font-semibold text-sm'}>
                            Podcasts
                        </button>
                        <button disabled={filter === 'episodes'} onClick={() => handleClick('episodes')} className={filter === 'episodes' ? 'bg-white text-black px-3 py-1 rounded-full font-semibold text-sm':'bg-overHighGray hover:bg-secondary px-3 py-1 rounded-full font-semibold text-sm'}>
                            Episodios
                        </button>
                    </div>
                </div>
                <div className="h-full overflow-x-hidden overflow-scroll">
                    <Search />
                </div>
            </div>}
            {!loadingDefault && page === 'artist' && 
            <div className=" h-full rounded-lg relative">
                <div className="absolute h-16 top-0 w-full hidden lg:block z-50">
                    <TopTools />
                </div>
                <div className="h-full overflow-x-hidden overflow-scroll">
                    <Artist />
                </div>
            </div>}
            {!loadingDefault && page === 'album' && 
            <div className=" h-full rounded-lg relative">
                <div className="absolute h-16 top-0 w-full hidden lg:block z-50">
                    <TopTools />
                </div>
                <div className="h-full overflow-x-hidden overflow-scroll">
                    <Album />
                </div>
            </div>}
        </>
    )
}