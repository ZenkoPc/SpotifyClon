import randomColor from "randomcolor"
import { useSearchStore } from "../../store/useSearchStore"
import { PlayAlbumIcon } from "../../icons/playAlbum"
import { usePlaylistStore } from "../../store/usePlaylistStore"
import { usePodcastStore } from "../../store/usePodcastStore"
import { Loading } from "../loading"
import { useArtistStore } from "../../store/useArtistStore"
import { useAlbumStore } from "../../store/useAlbumStore"

export const SelectedOption = () => {

    const color = randomColor()
    const results = useSearchStore(store => store.resultsSearch)
    const query = useSearchStore(store => store.query)
    const setPage = usePlaylistStore(store => store.setPage)
    const setEpisode = usePodcastStore(store => store.setEpisode)
    const setPlaylist = usePlaylistStore(store => store.handleClick)
    const setPodcastSelected = usePodcastStore(store => store.setPodcastSelected)
    const loading = useSearchStore(store => store.loadingResults)
    const setArtistInfo = useArtistStore(store => store.setArtistInfo)
    const setAlbum = useAlbumStore(store => store.setAlbum)

    const handleEpisode = (value: {}) => {
        setPage('episode')
        setEpisode(value)
    }

    const handlePodcast = (value: string) => {
        setPodcastSelected(value)
        setPage('podcast')
    }

    const handleSelectPlaylist = (value: {}) => {
        setPlaylist(value)
        setPage('playlist')
    }
    
    const handleClick = (value: string) => {
        setArtistInfo(value)
        setPage('artist')
    }

    const handleAlbum = (value: string) => {
        setAlbum(value)
        setPage('album')
        console.log(value)
    }

    return (
        <>
            {loading && <Loading />}
            {!loading && 
                <div className="w-full h-80 relative" style={{ backgroundColor: color }}>
                <div className="bg-overBlack opacity-40 w-full h-full">
                </div>
                <div className="absolute px-6 top-10 mt-32 font-bold text-7xl">
                    <h1 className="text-white">
                        {query}
                    </h1>
                </div>  
                <div className="p-5">
                <div className='w-full text-white mt-10'>
                        <h2 className="font-bold text-2xl tracking-tight">
                            Artistas
                        </h2>
                        <div className='mt-9 flex overflow-x-scroll md:grid md:grid-cols-fluid gap-5'>
                        {
                            results?.artists?.items?.map((ob) => {
                                return (
                                    <div onClick={() => { handleClick(ob?.id) }} className="relative group min-h-[270px] pb-4 min-w-[175px] max-w-[175px]" key={ob?.id}>
                                        <div className="flex flex-col w-full p-2 h-full hover:cursor-pointer rounded-lg hover:bg-overHighGray bg-overBlack2">
                                            <div className="p-2 h-40 relative">
                                                <img className="w-full rounded-full h-full" src={ob?.images[0]?.url} alt="" />
                                            </div>
                                            <div>
                                                <div className="w-full pl-3 pt-4">
                                                    <h3 className="text-white font-bold">
                                                        {ob?.name}
                                                    </h3>
                                                </div>
                                                <div className="pl-3">
                                                    <p className="text-sm capitalize text-primaryGray font-semibold">
                                                        {ob?.type}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                        </div>
                    </div>
                    <div className='w-full text-white mt-10'>
                        <h2 className="font-bold text-2xl tracking-tight">
                            Albumes
                        </h2>
                        <div className='mt-9 flex overflow-x-scroll md:grid md:grid-cols-fluid gap-5'>
                            {
                                    results?.albums?.items?.map((ob) => {
                                        return (
                                            <div onClick={() => { handleAlbum(ob?.id)} } className="relative group min-h-[270px] pb-4 min-w-[175px] max-w-[175px]" key={ob?.id}>
                                                <div className="flex flex-col w-full p-2 h-full hover:cursor-pointer rounded-lg hover:bg-overHighGray bg-overBlack2">
                                                    <div className="p-2 h-40 relative">
                                                        <img className="w-full rounded-lg h-full" src={ob.images[0].url} alt="" />
                                                    </div>
                                                    <div>
                                                        <div className="w-full p-3">
                                                            <h3 className="text-white font-bold">
                                                                {ob.name.slice(0,10)}...
                                                            </h3>
                                                        </div>
                                                        <div className="pl-3">
                                                            <p className="text-sm text-primaryGray font-semibold">
                                                                {ob.release_date.split('-')[0]} • {ob.artists[0].name}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                            }
                        </div>
                        <div className='w-full text-white mt-10'>
                            <h2 className="font-bold text-2xl tracking-tight">
                                Listas
                            </h2>
                            <div className='mt-9 flex overflow-x-scroll md:grid md:grid-cols-fluid gap-5'>
                                {
                                        results?.playlists?.items?.map((ob) => {
                                            return (
                                                <div onClick={() => { handleSelectPlaylist(ob) }} className="relative group h-[320px] pb-4 min-w-[175px] max-w-[175px]" key={ob?.id}>
                                                    <div className="flex flex-col justify-between w-full p-2 h-full hover:cursor-pointer rounded-lg hover:bg-overHighGray bg-overBlack2">
                                                        <div className="p-2 h-40 relative">
                                                            <img className="w-full rounded-lg h-full" src={ob.images[0].url} alt="" />
                                                        </div>
                                                        <div className="w-full p-3">
                                                            <h3 className="text-white font-bold">
                                                                {ob.name.length > 20 ? ob.name.slice(0,20) : ob.name}
                                                            </h3>
                                                        </div>
                                                        <div className="pl-3">
                                                            <p className="text-sm text-primaryGray font-semibold">
                                                                {ob.description.slice(0,25)}...
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <button className="rounded-full bg-greaterGreen-600 p-0 group-hover:p-3 transition-all absolute duration-300 group-hover:bottom-[47%] bottom-24 right-6 opacity-0 hover: group-hover:opacity-100 hover:bg-greaterGreen-700">
                                                        <PlayAlbumIcon />
                                                    </button>
                                                </div>
                                            )
                                        })
                                }
                            </div>
                        </div>
                        <div className='w-full text-white mt-10'>
                            <h2 className="font-bold text-2xl tracking-tight">
                                Podcast
                            </h2>
                            <div className='mt-9 flex overflow-x-scroll md:grid md:grid-cols-fluid gap-5'>
                                {
                                        results?.shows?.items?.map((ob) => {
                                            return (
                                                <div onClick={() => { handlePodcast(ob.id) }} className="relative group h-[320px] pb-4 min-w-[175px] max-w-[175px]" key={ob?.id}>
                                                    <div className="flex flex-col justify-between w-full p-2 h-full hover:cursor-pointer rounded-lg hover:bg-overHighGray bg-overBlack2">
                                                        <div className="p-2 h-40 relative">
                                                            <img className="w-full rounded-lg h-full" src={ob.images[0].url} alt="" />
                                                        </div>
                                                        <div className="w-full p-3">
                                                            <h3 className="text-white font-bold">
                                                                {ob.name.length > 20 ? ob.name.slice(0,20) : ob.name}
                                                            </h3>
                                                        </div>
                                                        <div className="pl-3">
                                                            <p className="text-sm text-primaryGray font-semibold">
                                                                {ob.description.slice(0,25)}...
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <button className="rounded-full bg-greaterGreen-600 p-0 group-hover:p-3 transition-all absolute duration-300 group-hover:bottom-[47%] bottom-24 right-6 opacity-0 hover: group-hover:opacity-100 hover:bg-greaterGreen-700">
                                                        <PlayAlbumIcon />
                                                    </button>
                                                </div>
                                            )
                                        })
                                }
                            </div>
                        </div>
                        <div className='w-full text-white mt-10'>
                            <h2 className="font-bold text-2xl tracking-tight">
                                Episodios
                            </h2>
                            <div className='mt-9 flex overflow-x-scroll md:grid md:grid-cols-fluid gap-5'>
                                {
                                        results?.episodes?.items?.map((ob) => {
                                            return (
                                                <div onClick={() => { handleEpisode(ob) }} className="relative group h-[320px] pb-4 min-w-[175px] max-w-[175px]" key={ob?.id}>
                                                    <div className="flex flex-col justify-between w-full p-2 h-full hover:cursor-pointer rounded-lg hover:bg-overHighGray bg-overBlack2">
                                                        <div className="p-2 h-40 relative">
                                                            <img className="w-full rounded-lg h-full" src={ob.images[0].url} alt="" />
                                                        </div>
                                                        <div className="w-full p-3">
                                                            <h3 className="text-white font-bold">
                                                                {ob.name.length > 20 ? ob.name.slice(0,20) : ob.name}
                                                            </h3>
                                                        </div>
                                                        <div className="pl-3">
                                                            <p className="text-sm text-primaryGray font-semibold">
                                                                {ob.description.slice(0,25)}...
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <button className="rounded-full bg-greaterGreen-600 p-0 group-hover:p-3 transition-all absolute duration-300 group-hover:bottom-[47%] bottom-24 right-6 opacity-0 hover: group-hover:opacity-100 hover:bg-greaterGreen-700">
                                                        <PlayAlbumIcon />
                                                    </button>
                                                </div>
                                            )
                                        })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            }
        </>
    )
}