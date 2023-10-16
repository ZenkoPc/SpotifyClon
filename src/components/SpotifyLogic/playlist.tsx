import { useEffect, useState } from "react"
import { usePlaylistStore } from "../../store/usePlaylistStore"
import { ColorExtractor } from 'react-color-extractor'
import { PlayAlbumIcon } from "../../icons/playAlbum"
import { FavIcon } from "../../icons/favorite"
import { MoreIcon } from "../../icons/more"
import { useButtonsStore } from "../../store/useButtonsStore"
import { GoToIcon } from "../../icons/goto"
import { TimeIcon } from "../../icons/time"
import { FavSizeIcon } from "../../icons/favoriteTable"
import { MoreSizeIcon } from "../../icons/moreTable"
import { PlayIcon } from "../../icons/play"
import { PauseIcon } from "../../icons/pause"
import { PlaylistHeader } from "../SpotifyPlaylist/playlistHeader"
import { Loading } from "../loading"

const audio = new Audio('')

export const PlaylistReactive = () => {
    const playlist = usePlaylistStore(store => store.playlist)
    const [color, setColor] = useState('#000000')
    const styles = {
        backgroundColor: color[1]
    }
    const loginModal = useButtonsStore(store => store.setListenLoginModal)
    const setImg = usePlaylistStore(store => store.setDefaultImg)
    const getMusicData = usePlaylistStore(store => store.fetchTracks)
    const tracks = usePlaylistStore(store => store.tracks)
    const login = useButtonsStore(store => store.setLoginState)
    const [state, setState] = useState(false)
    const [audioState, setAudioState] = useState('')
    const loading = usePlaylistStore(store => store.loadingPlaylist)

    const handleClick = (img: string) => {
        loginModal(true)
        setImg(img)
    }

    const handleFavorite = () => {
        login(true)
    }

    const handlePlay = (url : string) => {
        setAudioState(url)
        audio.pause()
        audio.src = url
        audio.play()
    }

    const handlePause = () =>{
        audio.pause()
        setAudioState('')
    }

    useEffect(() => {
        getMusicData(playlist.tracks)
    }, [])

    const styles2 = state 
    ? 'absolute block overflow-hidden bg-secondary font-medium text-overWhite -bottom-[150px] text-sm shadow-xl rounded-md left-[165px] hover:cursor-pointer p-1 z-[80]'
    : 'absolute hidden bg-overHighGray font-medium text-white -bottom-[30px] text-sm shadow-xl rounded-md left-[25px] hover:cursor-pointer p-1'

    const handleClickLibrary = () => {
        setState(!state)
        login(false)
    }

    const handleOption = () => {
        login(true)
        setState(!state)
    }

    const millisToMinutesAndSeconds = (millis: number) => {
        const minutes = Math.floor(millis / 60000);
        const seconds = ((millis % 60000) / 1000).toFixed(0);
        return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
    }

    function weeksBetween(d2) {
        const date = new Date()
        const day = date.getDay()
        const month = date.getMonth()
        const year = date.getFullYear()
        const dateToday = new Date(year, month - 1, day);
        const dateEndPlacement = new Date(d2?.split("-")[0], d2?.split("-")[1], d2?.split("-")[2]);
        const ONE_WEEK = 1000 * 60 * 60 * 24 * 7;
        // Convert both dates to milliseconds
        const date1_ms = dateToday.getTime();
        const date2_ms = dateEndPlacement.getTime();
        const difference_ms = Math.abs(date1_ms - date2_ms);
        // Convert back to weeks and return hole weeks
        return Math.floor(difference_ms / ONE_WEEK);
    }

    return (
        <>
            {
                loading 
                ? (
                    <Loading />
                ) : (
                    <div className="w-full h-auto bg-gradient-to-t from-overBlack" style={styles}>
                        <div className="h-60 xs:h-48 md:h-64 w-full relative">
                            <img id="bannerImg" src={playlist.cover} className="h-full w-full object-cover object-center" alt={playlist.name} />
                            <ColorExtractor 
                                src={playlist.cover} 
                                getColors={colors => setColor(colors)}
                            />
                            <div className="bg-gradient-to-t from-overBlack absolute top-0 h-full w-full opacity-50 z-40">
                            </div>
                            <PlaylistHeader playlist={playlist} />
                        </div>
                        <div className="relative h-40 w-full">
                            <div className="h-full opacity-20 z-20 bg-overBlack absolute top-0 w-full">
                            </div>
                            <div className="z-[60] px-5  w-full h-full flex items-start pt-5 relative">
                                <div className="flex items-center gap-6">
                                    <button onClick={() => { handleClick(playlist.cover) }} className="bg-greaterGreen-600 rounded-full p-4 transition-all hover:bg-greaterGreen-700">
                                        <PlayAlbumIcon />
                                    </button>
                                    <button onClick={handleFavorite} className="text-primaryGray hover:text-white transition-all">
                                        <FavIcon />
                                    </button>
                                    <button onClick={handleClickLibrary} className="text-primaryGray hover:text-white transition-all">
                                        <MoreIcon />
                                    </button>
                                    <div className={styles2}>
                                        <ul>
                                            <li onClick={handleOption} className="px-2 py-2.5 flex gap-2 hover:pointer items-center hover:bg-overHighGray">
                                                Añadir a Tu biblioteca
                                            </li>
                                            <li onClick={handleClickLibrary} className="flex justify-between px-2 py-2.5 hover:cursor-pointer hover:bg-overHighGray gap-2 items-center">
                                                <a href="">
                                                    Denunciar
                                                </a>
                                                <GoToIcon />
                                            </li>
                                            <li onClick={handleClickLibrary} className="px-2 py-2.5 flex gap-2 hover:pointer items-center hover:bg-overHighGray">
                                                Añadir a la carpeta
                                            </li>
                                            <li onClick={handleOption} className="flex border-t-[1px] border-[#494949] px-2 py-2.5 hover:cursor-pointer hover:bg-overHighGray gap-2 items-center">
                                                Compartir
                                            </li>
                                            <li onClick={handleClickLibrary} className="px-2 border-y-[1px] border-[#494949] py-2.5 flex gap-2 hover:pointer items-center hover:bg-overHighGray">
                                                Acerca de las recomendaciones
                                            </li>
                                            <li onClick={handleClickLibrary} className="flex px-2 py-2.5 hover:cursor-pointer hover:bg-overHighGray gap-2 items-center">
                                                Abrir en la aplicacion de ordenador
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='w-full pb-24 bg-gradient-to-t from-overBlack relative py-9 flex flex-col gap-6 text-white h-full'>
                            <div className="absolute blur-xl z-20 -top-[4.4%] -left-10 bg-gradient-to-t from-overBlack via-overBlack via-[96%] w-[150%] h-full"></div>
                            <div className="flex flex-col gap-4 z-50 text-white -mt-20">
                                <div className="text-sm text-[#b3b3b3] w-full font-normal">
                                    <div className="border-b-[1px] px-5 border-[#242424]">
                                        <div className="w-full flex justify-between">
                                            <span className="font-normal pb-1 text-lg text-center">#</span>
                                            <span className="font-normal pb-1">Titulo</span>
                                            <span className="font-normal pb-1 hidden md:block">Albúm</span>
                                            <span className="font-normal pb-1 hidden xl:block">Fecha en la que se añadio</span>
                                            <span className="flex justify-center pr-8"><TimeIcon /></span>
                                        </div>
                                    </div>
                                    <div className="flex flex-col w-full">
                                        {
                                            tracks.items.map((track, index) => {
                                                return (
                                                    <div key={track?.track?.id} className="w-full hover:bg-[#242424] group flex">
                                                        <div className="px-1 w-12 flex justify-center">
                                                                <div className="flex flex-col justify-center items-center">
                                                                {
                                                                    audioState === track?.track?.preview_url
                                                                    ? (
                                                                        <button className="hidden group-hover:block" onClick={handlePause}>
                                                                            <PauseIcon />
                                                                        </button>
                                                                    ) : (
                                                                        <button className="hidden group-hover:block" onClick={() => handlePlay(track?.track?.preview_url)}>
                                                                            <PlayIcon />
                                                                        </button>
                                                                    )
                                                                }
                                                                <p className="group-hover:hidden">
                                                                    {index + 1}
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="flex gap-5 items-center py-2 w-5/6 md:w-3/6 xl:w-2/6">
                                                            <div className=" w-12">
                                                                <img src={track?.track?.album?.images[2]?.url} alt="" />
                                                            </div>
                                                            <div className="flex flex-col gap-1">
                                                                <span className="font-semibold text-white text-base">
                                                                    {track?.track?.name}
                                                                </span>
                                                                <span className="flex gap-1">
                                                                    {track?.track?.explicit ? 
                                                                    <span className="text-black bg-[#b3b3b3] p-[5px] rounded-sm leading-none text-[10px]">
                                                                        E
                                                                    </span> 
                                                                    : <></> }
                                                                    {track?.track?.artists[0]?.name}
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <div className="hidden md:flex items-center ml-3 w-2/6">
                                                            {track?.track?.album.name}
                                                        </div>
                                                        <div className="items-center w-2/6 ml-7 hidden xl:flex">
                                                                Hace { weeksBetween(track?.added_at.split("T")[0]) } Semanas
                                                        </div>
                                                        <div className="flex justify-center items-center pr-3">
                                                            <div className="flex items-center justify-center gap-4">
                                                                <button onClick={() => { handleClick(track?.track?.album?.images[0]?.url) }} className="opacity-0 group-hover:opacity-100 hover:text-white transition-all">
                                                                    <FavSizeIcon />
                                                                </button>
                                                                <p>
                                                                    {millisToMinutesAndSeconds(track?.track?.duration_ms)}
                                                                </p>
                                                                <button className="opacity-0 group-hover:opacity-100 hover:text-white transition-all">
                                                                    <MoreSizeIcon />
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </>
    )
}