import { useState } from "react"
import { useArtistStore } from "../../store/useArtistStore"
import { Loading } from "../loading"
import { ColorExtractor } from 'react-color-extractor'
import { PlayAlbumIcon } from "../../icons/playAlbum"
import { MoreIcon } from "../../icons/more"
import { FavSizeIcon } from "../../icons/favoriteTable"
import { millisToMinutesAndSeconds } from "../../services/toMinutes"
import { Track } from "../../types/typesArtist"
import { PauseIcon } from "../../icons/pause"
import { usePlaylistStore } from "../../store/usePlaylistStore"
import { useAlbumStore } from "../../store/useAlbumStore"

const audio = new Audio('')

export const Artist = () => {
    const artistInfo = useArtistStore(store => store.artistInfo)
    const artistAlbum = useArtistStore(store => store.artistAlbum)
    const artistTopTracks = useArtistStore(store => store.artistTopTracks)
    const artistRelated = useArtistStore(store => store.artistRelated)
    const loading = useArtistStore(store => store.loading)
    const [color, setColor] = useState('#000000')
    const [follow, setFollow] = useState(false)
    const [audioState, setAudioState] = useState(false)
    const setPage = usePlaylistStore(store => store.setPage)
    const setArtistInfo = useArtistStore(store => store.setArtistInfo)
    const setAlbum = useAlbumStore(store => store.setAlbum)

    const handleFollow = () => {
        setFollow(!follow)
    }

    const handlePlay = (value: string) => {
        audio.pause()
        audio.src = value
        audio.play()
        setAudioState(true)
    }

    const handlePause = () => {
        audio.pause()
        setAudioState(false)
    }

    const handleClick = (value: string) => {
        setArtistInfo(value)
        setPage('artist')
    }

    const handleAlbum = (value: string) => {
        setPage('album')
        setAlbum(value)
    }

    return (
        <>
            {loading && <Loading />}
            {!loading && 
                <div className="w-full h-full bg-gradient-to-b from-overHighGray to-overBlack rounded-lg overflow-scroll">
                    <div className="h-36 md:h-64 lg:h-96 relative" style={{ backgroundColor: color[1] }}>
                            <ColorExtractor 
                                src={artistInfo?.images[0]?.url} 
                                getColors={colors => setColor(colors)}
                            />
                        <div className="bg-overBlack w-full opacity-20 h-full absolute top-0 z-30"></div>
                        <img className="h-full hidden md:block w-full object-cover z-20" src={artistInfo?.images[0]?.url} alt={artistInfo?.name} />
                        <div className="text-white px-5 pb-5 font-bold text-8xl z-40 flex flex-col gap-5 absolute bottom-0">
                            <div>
                                <span className="ml-2 text-sm font-medium capitalize">
                                    {artistInfo?.type}
                                </span>
                                <h1 className="text-3xl md:text-8xl">
                                    {artistInfo?.name}
                                </h1>
                            </div>
                            <p className="ml-2 text-base font-normal">
                                {artistInfo?.followers?.total} seguidores
                            </p>
                        </div>
                    </div>
                    <div className="">
                        <div className="px-6 py-7 flex items-center gap-5">
                            <button className="bg-greaterGreen-500 p-4 rounded-full">
                                <PlayAlbumIcon />
                            </button>
                            <button onClick={handleFollow} className="border-[1px] h-8 px-4 rounded-full text-sm text-white font-semibold border-primaryGray hover:border-white transition-all">
                                {follow ? 'Siguiendo' : 'Seguir'}
                            </button>
                            <button className="text-white">
                                <MoreIcon />
                            </button>
                        </div>
                    </div>
                    <div className="text-white px-5">
                        <h2 className="text-2xl font-bold ml-2 mb-5">
                            Populares
                        </h2>
                        {
                            artistTopTracks?.tracks?.slice(0,5)?.map((track: Track) => {
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
                                            <button className="group-hover:opacity-100 opacity-0 hover:text-white">
                                                <FavSizeIcon />
                                            </button>
                                            <p className="text-sm font-medium">
                                                {millisToMinutesAndSeconds(track?.duration_ms)}
                                            </p>
                                            <button className="group-hover:opacity-100 opacity-0 hover:text-white transition-all">
                                                <MoreIcon />
                                            </button>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="text-white p-5">
                        <h2 className="text-2xl font-bold ml-2">
                            Albumes
                        </h2>
                        <div className="mt-9 flex overflow-x-scroll md:grid md:grid-cols-fluid gap-5">
                            {
                                artistAlbum?.items?.map((ob) => {
                                    return (
                                        <div onClick={() => { handleAlbum(ob.id) }} className="relative group min-h-[270px] pb-4 min-w-[175px] max-w-[175px]" key={ob?.id}>
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
                    </div>
                    <div className="p-5 text-white">
                        <h2 className="text-2xl font-bold ml-2">
                            Sus fans tambien escuchan
                        </h2>
                        <div className="mt-9 grid grid-cols-fluid gap-5">
                            {
                                artistRelated?.artists[1] !== undefined ? 
                                    artistRelated?.artists?.slice(0,10)?.map((ob) => {
                                        return (
                                            <div onClick={() => { handleClick(ob?.id) }} className="relative group min-h-[270px] pb-4 min-w-[175px] max-w-[175px]" key={ob?.id}>
                                                <div className="flex flex-col w-full p-2 h-full hover:cursor-pointer rounded-lg hover:bg-overHighGray bg-overBlack2">
                                                    <div className="p-2 h-40 relative">
                                                        <img className="w-full rounded-lg h-full" src={ob?.images[0]?.url} alt="" />
                                                    </div>
                                                    <div>
                                                        <div className="w-full p-3">
                                                            <h3 className="text-white font-bold">
                                                                {ob?.name?.slice(0,10)}...
                                                            </h3>
                                                        </div>
                                                        <div className="pl-3">
                                                            <p className="text-sm text-primaryGray font-semibold">
                                                                {ob?.type}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                : 
                                <h1 className="ml-2">
                                    No hay relacionados
                                </h1>
                            }
                        </div>
                    </div>
                </div>
            }
        </>
    )
}