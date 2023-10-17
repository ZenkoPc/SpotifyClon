import { useEffect, useState } from "react"
import { FavSizeIcon } from "../../icons/favoriteTable"
import { MoreIcon } from "../../icons/more"
import { PauseIcon } from "../../icons/pause"
import { PlayAlbumIcon } from "../../icons/playAlbum"
import { millisToMinutesAndSeconds } from "../../services/toMinutes"
import { useMusicStore } from "../../store/useMusicStore"
import { usePlaylistStore } from "../../store/usePlaylistStore"
import { usePodcastStore } from "../../store/usePodcastStore"
import { useSearchStore } from "../../store/useSearchStore"
import { Item3, Root } from "../../types/typesSearch"
import { Loading } from "../loading"
import { useButtonsStore } from "../../store/useButtonsStore"
import { ArtistCard } from "./artistCard"
import { TimeIcon } from "../../icons/time"
import { SearchIcon } from "../../icons/search"
import { useAlbumStore } from "../../store/useAlbumStore"

const getCategories = (categories: res[], query: string, handleClick: (icon: string, value:string) => void) => {

    const as = categories?.filter((ob) => ob?.name.toLowerCase() === query.toLowerCase())

    if(as.length > 0){
        return (
            <div onClick={() => { handleClick(as[0].icon, as[0].name) }} className="relative group w-full h-full" key={as[0].id}>
                    <div className="flex flex-col justify-between w-full p-2 h-full hover:cursor-pointer rounded-lg hover:bg-overHighGray bg-overBlack2">
                        <div className="w-full p-3 flex flex-col gap-2">
                            <img className="rounded-xl w-[90px] shadow-sm shadow-black" src={as[0].icon} alt={as[0].name} />
                            <h3 className="text-white text-3xl text-left font-bold">
                                {as[0].name}
                            </h3>
                            <span className="bg-overBlack px-4 py-1 rounded-full w-[83px] text-sm font-bold">
                                Genero
                            </span>
                        </div>
                    </div>
                </div>
        )
    }else{
        return ( 
        <div className="relative group w-full h-full">
            <div className="flex flex-col justify-between w-full p-2 h-full hover:cursor-pointer rounded-lg hover:bg-overHighGray bg-overBlack2">
                <div className="w-full p-9 flex flex-col gap-2">
                    <h3 className="text-white text-3xl text-left font-bold">
                        Sin resultados
                    </h3>
                    <span>
                        No hay resultados para tu busqueda
                    </span>
                    <span className="flex gap-3 font-medium">
                        Sigue buscando <SearchIcon />
                    </span>
                </div>
            </div>
        </div> )
    }

}

const audio = new Audio('')

export const SearchOption = () => {

    const results: Root = useSearchStore(store => store.resultsSearch)
    const loading = useSearchStore(store => store.loadingResults)
    const categories = useMusicStore(store => store.categories)
    const query = useSearchStore(store => store.query)
    const setCategoryValues = usePodcastStore(store => store.setCategoryValues)
    const setPage = usePlaylistStore(store => store.setPage)
    const [audioState, setAudioState] = useState(false)
    const loginPlaylist = useButtonsStore(store => store.setListenLoginModal)
    const loginImg = usePlaylistStore(store => store.setDefaultImg)
    const setPlaylist = usePlaylistStore(store => store.handleClick)
    const setPodcastSelected = usePodcastStore(store => store.setPodcastSelected)
    const setEpisode = usePodcastStore(store => store.setEpisode)
    const randomCategoryNumber = Math.round(Math.random()*20)
    const filter = useButtonsStore(store => store.selectedFilter)
    const login = useButtonsStore(store => store.setListenLoginModal)
    const setLoginImg = usePlaylistStore(store => store.setDefaultImg)
    const setHeaderStyle = useButtonsStore(store => store.setHeaderStyle)
    const setResults = useSearchStore(store => store.setResults)
    const setQuery = useSearchStore(store => store.setQuery)
    const setAlbum = useAlbumStore(store => store.setAlbum)
    
    const handleCategory = (value: string) => {
        setResults(value)
        setQuery(value)
        setHeaderStyle(false)
    }

    useEffect(() => {
        setHeaderStyle(true)
    }, [])

    const handleClick  = (icon: string, value: string) => {
        setCategoryValues(icon, value)
        setPage('podcastResult')
    }

    const handleFav = (value: string) => {
        login(true)
        setLoginImg(value)
    }

    const handleEpisode = (value: {}) => {
        setPage('episode')
        setEpisode(value)
    }

    const handlePlay = (value: string) => {
        audio.pause()
        audio.src = value
        audio.play()
        setAudioState(true)
    }

    const handlePodcast = (value: string) => {
        setPodcastSelected(value)
        setPage('podcast')
    }

    const handlePause = () => {
        audio.pause()
        setAudioState(false)
    }

    const handleSelectPlaylist = (value: {}) => {
        setPlaylist(value)
        setPage('playlist')
    }

    const handlePlaylistPlay = (value: string) => {
        loginPlaylist(true)
        loginImg(value)
    }

    const handleAlbum = (value: string) => {
        setAlbum(value)
        setPage('album')
        console.log(value)
    }

    return (
        <div className="px-5 pt-32">
            {loading && <Loading /> }
            {!loading && 
                <>
                    <div className={filter === 'all' ? 'grid grid-cols-1 xl:grid-cols-7 gap-6 w-full text-white' : 'hidden'}>
                    <div className="flex flex-col gap-9 col-span-2">
                        <h2 className="font-bold text-2xl tracking-tight">
                            Resultado principal 
                        </h2>
                        <div className=" bg-overBlack2 h-full rounded-lg">
                            {
                                getCategories(categories, query, handleClick)
                            }
                        </div>
                    </div>
                    <div className="flex flex-col gap-9 col-span-5">
                        <h2 className="font-bold text-2xl tracking-tight">
                            Canciones
                        </h2>
                        <div className="flex flex-col gap-1 text-white">
                            {
                                results?.tracks?.items?.slice(0,4)?.map((track: Item3) => {
                                    return (
                                        <div className="flex pl-3 group hover:bg-overHighGray py-1 rounded-lg transition-all pr-8 justify-between items-center w-full" key={track?.id}>
                                            <div className="flex items-center gap-3">
                                                <div className="w-9 relative">
                                                    <div className="bg-overBlack opacity-90 absolute h-9 w-9 justify-center items-center hidden group-hover:flex">
                                                        <button onClick={() => { handlePlay(track?.preview_url) }} className={!audioState || audio.src !== track.preview_url ? 'block' : 'hidden'}>
                                                            <PlayAlbumIcon />
                                                        </button>
                                                        <button onClick={handlePause}  className={audioState && audio.src === track?.preview_url ? 'block' : 'hidden'}>
                                                            <PauseIcon />
                                                        </button>
                                                    </div>
                                                    <img src={track?.album?.images[2]?.url} alt="" />
                                                </div>
                                                <div className="flex flex-col">
                                                    <span className="font-medium capitalize text-white text-base">
                                                        {track?.name}
                                                    </span>
                                                    <span className="flex gap-1">
                                                        {track?.explicit ? 
                                                        <span className="text-black bg-[#b3b3b3] px-1.5 flex items-center rounded-sm leading-none text-[10px]">
                                                            E
                                                        </span> 
                                                        : <></> }
                                                        <span className=" text-primaryGray text-sm">
                                                            {track?.artists[0]?.name}
                                                        </span>
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="flex items-center justify-center gap-2 text-primaryGray transition-all">
                                                <button onClick={() => { handleFav(track.album.images[0].url) }} className="group-hover:opacity-100 opacity-0 hover:text-white">
                                                    <FavSizeIcon />
                                                </button>
                                                <p className="text-sm font-medium">
                                                    {millisToMinutesAndSeconds(track?.duration_ms)}
                                                </p>
                                                <button onClick={() => { handleFav(track.album.images[0].url) }} className="group-hover:opacity-100 opacity-0 hover:text-white transition-all">
                                                    <MoreIcon />
                                                </button>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
                <div className={filter === 'all' ? 'w-full text-white mt-10' : 'hidden'}>
                    <h2 className="font-bold text-2xl tracking-tight">
                        Incluye a
                    </h2>
                    <div className="flex mt-9 gap-5 overflow-scroll overflow-y-hidden">
                        {
                            results?.playlists?.items?.slice(0,5)?.map((ob) => {
                                return (
                                    <div className="relative group min-h-[320px] pb-4 min-w-[175px] max-w-[175px]" key={ob?.id}>
                                        <div onClick={() => { handleSelectPlaylist(ob) }} className="flex flex-col justify-between w-full p-2 h-full hover:cursor-pointer rounded-lg hover:bg-overHighGray bg-overBlack2">
                                            <div className="p-2 h-40 relative">
                                                <img className="w-full rounded-lg h-full" src={ob.images[0].url} alt="" />
                                            </div>
                                            <div className="w-full p-3">
                                                <h3 className="text-white font-bold">
                                                    {ob.name}
                                                </h3>
                                            </div>
                                            <div className="pl-3">
                                                <p className="text-sm text-primaryGray font-semibold">
                                                    {ob.description.slice(0,25)}...
                                                </p>
                                            </div>
                                        </div>
                                        <button onClick={() => { handlePlaylistPlay(ob?.images[0]?.url) }} className="rounded-full bg-greaterGreen-600 p-0 group-hover:p-3 transition-all absolute duration-300 group-hover:bottom-[47%] bottom-24 right-6 opacity-0 hover: group-hover:opacity-100 hover:bg-greaterGreen-700">
                                            <PlayAlbumIcon />
                                        </button>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className={filter === 'artists' || filter === 'all' ? 'w-full text-white mt-10' : 'hidden'}>
                    <h2 className="font-bold text-2xl tracking-tight">
                        Artistas
                    </h2>
                    <div className={filter === 'artists' ? 'mt-9 grid grid-cols-fluid gap-5' : 'flex mt-9 gap-5 overflow-scroll overflow-y-hidden'}>
                        <ArtistCard artists={results?.artists} />
                    </div>
                </div>
                <div className={filter === 'albums' || filter === 'all' ? 'w-full text-white mt-10' : 'hidden'}>
                    <h2 className="font-bold text-2xl tracking-tight">
                        Albumes
                    </h2>
                    <div className={filter === 'albums' ? 'mt-9 grid grid-cols-fluid gap-5' : 'flex mt-9 gap-5 overflow-scroll overflow-y-hidden'}>
                        {
                            filter === 'albums'
                            ? (
                                results?.albums?.items?.map((ob) => {
                                    return (
                                        <div onClick={() => { handleAlbum(ob.id) }} className="relative group min-h-[270px] pb-4 min-w-[175px] max-w-[175px]" key={ob?.id}>
                                            <div onClick={() => { handleSelectPlaylist(ob) }} className="flex flex-col w-full p-2 h-full hover:cursor-pointer rounded-lg hover:bg-overHighGray bg-overBlack2">
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
                            ) : (
                                results?.albums?.items?.slice(0,7)?.map((ob) => {
                                    return (
                                        <div onClick={() => { handleAlbum(ob.id) }} className="relative group min-h-[270px] pb-4 min-w-[175px] max-w-[175px]" key={ob?.id}>
                                            <div onClick={() => { handleSelectPlaylist(ob) }} className="flex flex-col w-full p-2 h-full hover:cursor-pointer rounded-lg hover:bg-overHighGray bg-overBlack2">
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
                            )
                        }
                    </div>
                </div>
                <div className={filter === 'lists' || filter === 'all' ? 'w-full text-white mt-10' : 'hidden'}>
                    <h2 className="font-bold text-2xl tracking-tight">
                        Listas
                    </h2>
                    <div className={filter === 'lists' ? 'mt-9 grid grid-cols-fluid gap-5' : 'flex mt-9 gap-5 overflow-scroll overflow-y-hidden'}>
                        {
                            filter === 'lists' 
                            ? (
                                results?.playlists?.items?.map((ob) => {
                                    return (
                                        <div className="relative group h-[320px] pb-4 min-w-[175px] max-w-[175px]" key={ob?.id}>
                                            <div onClick={() => { handleSelectPlaylist(ob) }} className="flex flex-col justify-between w-full p-2 h-full hover:cursor-pointer rounded-lg hover:bg-overHighGray bg-overBlack2">
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
                                            <button onClick={() => { handlePlaylistPlay(ob?.images[0]?.url) }} className="rounded-full bg-greaterGreen-600 p-0 group-hover:p-3 transition-all absolute duration-300 group-hover:bottom-[47%] bottom-24 right-6 opacity-0 hover: group-hover:opacity-100 hover:bg-greaterGreen-700">
                                                <PlayAlbumIcon />
                                            </button>
                                        </div>
                                    )
                                })
                            ) : (
                                results?.playlists?.items?.slice(5,12)?.map((ob) => {
                                    return (
                                        <div className="relative group h-[320px] pb-4 min-w-[175px] max-w-[175px]" key={ob?.id}>
                                            <div onClick={() => { handleSelectPlaylist(ob) }} className="flex flex-col justify-between w-full p-2 h-full hover:cursor-pointer rounded-lg hover:bg-overHighGray bg-overBlack2">
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
                                            <button onClick={() => { handlePlaylistPlay(ob?.images[0]?.url) }} className="rounded-full bg-greaterGreen-600 p-0 group-hover:p-3 transition-all absolute duration-300 group-hover:bottom-[47%] bottom-24 right-6 opacity-0 hover: group-hover:opacity-100 hover:bg-greaterGreen-700">
                                                <PlayAlbumIcon />
                                            </button>
                                        </div>
                                    )
                                })
                            )
                        }
                    </div>
                </div>
                <div className={filter === 'podcasts' || filter === 'all' ? 'w-full text-white mt-10' : 'hidden'}>
                    <h2 className="font-bold text-2xl tracking-tight">
                        Podcasts
                    </h2>
                    <div className={filter === 'podcasts' ? 'mt-9 grid grid-cols-fluid gap-5' : 'flex mt-9 gap-5 overflow-scroll overflow-y-hidden'}>
                        {
                            filter === 'podcasts'
                            ? (
                                results?.shows?.items?.map((ob) => {
                                    return (
                                        <div className="relative group min-h-[270px] pb-4 min-w-[175px] max-w-[175px]" key={ob?.id}>
                                            <div onClick={() => { handlePodcast(ob.id) }} className="flex flex-col w-full p-2 h-full hover:cursor-pointer rounded-lg hover:bg-overHighGray bg-overBlack2">
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
                                                            {ob.description.slice(0,20)}...
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            ) : (
                                results?.shows?.items?.slice(0,7)?.map((ob) => {
                                    return (
                                        <div className="relative group min-h-[270px] pb-4 min-w-[175px] max-w-[175px]" key={ob?.id}>
                                            <div onClick={() => { handlePodcast(ob.id) }} className="flex flex-col w-full p-2 h-full hover:cursor-pointer rounded-lg hover:bg-overHighGray bg-overBlack2">
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
                                                            {ob.description.slice(0,20)}...
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            )
                        }
                    </div>
                </div>
                <div className={filter === 'episodes' || filter === 'all' ? 'w-full text-white mt-10' : 'hidden'}>
                    <h2 className="font-bold text-2xl tracking-tight">
                        Episodios
                    </h2>
                    <div className={filter === 'episodes' ? 'mt-9 grid grid-cols-fluid gap-5' : 'flex mt-9 gap-5 overflow-scroll overflow-y-hidden'}>
                        {
                            filter === 'episodes' 
                            ? (
                                results?.episodes?.items?.map((ob) => {
                                    return (
                                        <div className="relative group min-h-[270px] pb-4 min-w-[175px] max-w-[175px]" key={ob?.id}>
                                            <div onClick={() => { handleEpisode(ob) }} className="flex flex-col w-full p-2 h-full hover:cursor-pointer rounded-lg hover:bg-overHighGray bg-overBlack2">
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
                                                            {ob.description.slice(0,20)}...
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            ) : (
                                results?.episodes?.items?.slice(0,7)?.map((ob) => {
                                    return (
                                        <div className="relative group min-h-[270px] pb-4 min-w-[175px] max-w-[175px]" key={ob?.id}>
                                            <div onClick={() => { handleEpisode(ob) }} className="flex flex-col w-full p-2 h-full hover:cursor-pointer rounded-lg hover:bg-overHighGray bg-overBlack2">
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
                                                            {ob.description.slice(0,20)}...
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            )
                        }
                    </div>
                </div>
                <div className={ filter === 'all' ? 'w-full text-white mt-10' : 'hidden'}>
                    <h2 className="font-bold text-2xl tracking-tight">
                        Otras categorias
                    </h2>
                    <div className="flex mt-9 gap-5 overflow-scroll overflow-y-hidden">
                        {
                            categories?.slice(randomCategoryNumber,randomCategoryNumber+7)?.map((ob) => {
                                return (
                                    <div className="relative group min-h-[270px] pb-4 min-w-[175px] max-w-[175px]" key={ob?.id}>
                                        <div onClick={() => { handleCategory(ob.name) }} className="flex flex-col w-full p-2 h-full hover:cursor-pointer rounded-lg hover:bg-overHighGray bg-overBlack2">
                                            <div className="p-2 h-40 relative">
                                                <img className="w-full rounded-lg h-full" src={ob.icon} alt={ob.name} />
                                            </div>
                                            <div>
                                                <div className="w-full p-3">
                                                    <h3 className="text-white font-bold">
                                                        {ob.name}
                                                    </h3>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className={ filter === 'songs' ? 'w-full text-white mt-10' : 'hidden'}>
                    <div className="flex flex-col mt-9 gap-5 overflow-scroll overflow-x-hidden">
                        <div className="flex w-full justify-between text-primaryGray text-sm border-b-[1px] border-overHighGray pb-2">
                            <div className="flex w-3/5 gap-10">
                                <span>
                                    #
                                </span>
                                <span>
                                    Titulo
                                </span>
                            </div>
                            <div className="flex w-2/5 justify-between pr-20">
                                <span>
                                    Album
                                </span>
                                <span>
                                    <TimeIcon />
                                </span>
                            </div>
                        </div>
                            {
                                results?.tracks?.items?.map((track: Item3, index) => {
                                    return (
                                        <>
                                            <div className="flex pl-3 group hover:bg-overHighGray py-1 rounded-lg transition-all pr-8 justify-between items-center w-full" key={track?.id}>
                                                <div className="flex gap-8 w-3/5">
                                                    <div className="flex items-center">
                                                        <span className="group-hover:hidden flex items-center justify-center">
                                                            {index+1}
                                                        </span>
                                                        <div className="bg-overBlack opacity-90 h-9 w-9 justify-center items-center hidden group-hover:flex">
                                                                <button onClick={() => { handlePlay(track?.preview_url) }} className={!audioState || audio.src !== track.preview_url ? 'block' : 'hidden'}>
                                                                    <PlayAlbumIcon />
                                                                </button>
                                                                <button onClick={handlePause}  className={audioState && audio.src === track?.preview_url ? 'block' : 'hidden'}>
                                                                    <PauseIcon />
                                                                </button>
                                                            </div>
                                                    </div>
                                                    <div className="flex items-center gap-3">
                                                        <div className="min-w-[35px] max-w-[35px] relative">
                                                            <img src={track?.album?.images[2]?.url} alt="" />
                                                        </div>
                                                        <div className="flex flex-col">
                                                            <span className="font-medium capitalize text-white text-base">
                                                                {track?.name}
                                                            </span>
                                                            <span className="flex gap-1">
                                                                {track?.explicit ? 
                                                                <span className="text-black bg-[#b3b3b3] px-1.5 flex items-center rounded-sm leading-none text-[10px]">
                                                                    E
                                                                </span> 
                                                                : <></> }
                                                                <span className=" text-primaryGray text-sm">
                                                                    {track?.artists[0]?.name}
                                                                </span>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="flex justify-between w-2/5">
                                                    <div className="text-left capitalize text-primaryGray text-sm font-medium">
                                                        {track.artists[0].name}
                                                    </div>
                                                    <div className="flex items-center justify-center gap-3 text-primaryGray transition-all">
                                                        <button onClick={() => { handleFav(track.album.images[0].url) }} className="group-hover:opacity-100 opacity-0 hover:text-white">
                                                            <FavSizeIcon />
                                                        </button>
                                                        <p className="text-sm font-medium">
                                                            {millisToMinutesAndSeconds(track?.duration_ms)}
                                                        </p>
                                                        <button onClick={() => { handleFav(track.album.images[0].url) }} className="group-hover:opacity-100 opacity-0 hover:text-white transition-all">
                                                            <MoreIcon />
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    )
                                })
                            }
                    </div>
                </div>
                </>
            }
        </div>
    )
}