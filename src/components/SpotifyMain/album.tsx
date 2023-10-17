import { useState } from "react"
import { useAlbumStore } from "../../store/useAlbumStore"
import { Loading } from "../loading"
import { ColorExtractor } from 'react-color-extractor'
import { TimeIcon } from "../../icons/time"
import { PlayAlbumIcon } from "../../icons/playAlbum"
import { PauseIcon } from "../../icons/pause"
import { FavSizeIcon } from "../../icons/favoriteTable"
import { MoreIcon } from "../../icons/more"
import { millisToMinutesAndSeconds } from "../../services/toMinutes"
import { FavIcon } from "../../icons/favorite"

const audio = new Audio('')

export const Album = () => {

    const album = useAlbumStore(store => store.items)
    const loading = useAlbumStore(store => store.loading)
    const [color, setColor] = useState('#000000')
    const [audioState, setAudioState] = useState(false)
    console.log(album)

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

    return (
        <>
            {loading && <Loading />}
            {!loading && 
                <div className="w-full pb-5 h-full bg-gradient-to-b from-overHighGray to-overBlack overflow-scroll overflow-x-hidden">
                    <div className="lg:mt-16 pt-4 lg:h-52 xl:h-64 pb-5 w-full relative flex flex-col md:flex-row gap-6 items-center" style={{ backgroundColor: color[1] }}>
                        <div className="w-[250px] md:w-[200px] lg:h-[180px] lg:w-[220px] xl:w-[200px] xl:h-[210px] 2xl:h-[230px] shadow-2xl 2xl:w-[230px] overflow-hidden md:ml-6">
                            <img className="w-full h-full object-cover" src={album.images[0].url} alt={album.name} />
                        </div>
                        <div className="flex items-center md:items-start flex-col z-20 gap-2 capitalize h-full justify-end text-white">
                            <span className="text-sm">
                                {album.album_type}
                            </span>
                            <h1 className="text-2xl text-center md:text-left md:text-3xl xl:text-4xl 2xl:text-5xl font-bold">
                                {album.name}
                            </h1>
                            <h4 className="text-lg md:text-left md:text-xl xl:text-2xl font-bold">
                                {album.artists[0].name}
                            </h4>
                        </div>
                        <ColorExtractor 
                            src={album.images[0].url} 
                            getColors={colors => setColor(colors)}
                        />
                    </div>
                    <div className='w-full pb-24 relative py-9 flex flex-col gap-6 text-white h-full'>
                            <div className="absolute blur-xl z-20  h-full"></div>
                            <div className="flex flex-col px-5 gap-4 z-30 text-white">
                                <div className="">
                                    <div className="pb-5 flex items-center gap-5">
                                        <button className="bg-greaterGreen-500 text-black hover:bg-greaterGreen-600 transition-all p-4 rounded-full">
                                            <PlayAlbumIcon />
                                        </button>
                                        <button className="text-primaryGray hover:text-white transition-all">
                                            <FavIcon />
                                        </button>
                                        <button className="text-primaryGray hover:text-white transition-all">
                                            <MoreIcon />
                                        </button>
                                    </div>
                                </div>
                                <div className="text-sm text-[#b3b3b3] w-full font-normal">
                                    <div className="border-b-[1px] px-5 border-[#242424]">
                                        <div className="w-full flex justify-between items-center">
                                            <div className="flex gap-7 items-center">
                                                <span className="font-normal pb-1 text-lg text-center">#</span>
                                                <span className="font-normal pb-1">Titulo</span>
                                            </div>
                                            <span className="flex justify-center pr-8"><TimeIcon /></span>
                                        </div>
                                    </div>
                                </div>
                                {
                                    album?.tracks?.items?.map((track: Track, index: number) => {
                                        return (
                                            <div className="flex pl-3 group hover:bg-overHighGray py-1 rounded-lg transition-all pr-8 justify-between items-center w-full" key={track?.id}>
                                                <div className="flex items-center gap-3">
                                                    <div className="w-9 relative flex justify-center items-center">
                                                        <div className="bg-overBlack opacity-90 absolute h-9 w-9 justify-center items-center hidden group-hover:flex">
                                                        <div className="bg-overBlack opacity-90 absolute h-9 w-9 justify-center items-center hidden group-hover:flex">
                                                            <button onClick={() => { handlePlay(track?.preview_url) }} className={!audioState || audio.src !== track.preview_url ? 'block' : 'hidden'}>
                                                                <PlayAlbumIcon />
                                                            </button>
                                                            <button onClick={handlePause}  className={audioState && audio.src === track?.preview_url ? 'block' : 'hidden'}>
                                                                <PauseIcon />
                                                            </button>
                                                        </div>
                                                        </div>
                                                        {index+1}
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
                        </div>
                </div>
            }
        </>
    )
}