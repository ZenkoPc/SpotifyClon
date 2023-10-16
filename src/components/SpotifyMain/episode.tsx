import { useEffect, useState } from "react"
import { ColorExtractor } from 'react-color-extractor'
import { usePodcastStore } from "../../store/usePodcastStore"
import { PlayAlbumIcon } from "../../icons/playAlbum"
import { MoreIcon } from "../../icons/more"
import { millisToMinutesAndSeconds } from "../../services/toMinutes"
import { AddToListIcon } from "../../icons/addToList"
import { usePlaylistStore } from "../../store/usePlaylistStore"
import { PauseIcon } from "../../icons/pause"
import { useButtonsStore } from "../../store/useButtonsStore"

const audio = new Audio('')

export const Episode = () => {
    const episode = usePodcastStore(store => store.selectedEpisode)
    const [color,setColor] = useState('#000000')
    const styles = { backgroundColor: color[1] }
    const date = new Date(episode?.release_date)
    const [desc, setDesc] = useState(false)
    const setPage = usePlaylistStore(store => store.setPage)
    const [isPlaying, setIsPlaying] = useState(false)
    const setLogin = useButtonsStore(store => store.setNoLoginMadeModal)

    const handleClick = () => {
        setLogin(true)
    }

    const handleClose = () => {
        setLogin(false)
    }

    useEffect(() => {
        audio.src = episode?.audio_preview_url
    }, [])

    const handlePlay  = () => {
        audio.play()
        setIsPlaying(true)
    }

    const handlePause = () => {
        audio.pause()
        setIsPlaying(false)
    }

    const getMonth = (value: number) => {
        const arr = [
            'Enero','Febrero','Marzo',
            'Abril','Mayo','Junio','Julio',
            'Agosto','Septiembre','Octubre',
            'Noviembre','Diciembre'
        ]
        return arr[value+1]
    }

    const style = isPlaying
    ? 'bg-greaterGreen-400 text-black rounded-full px-4 py-3 transition-all hover:bg-greaterGreen-700 hidden'
    : 'bg-greaterGreen-400 text-black rounded-full px-4 py-4 transition-all hover:bg-greaterGreen-700 '

    const style2 = isPlaying
    ? 'bg-greaterGreen-400 text-black rounded-full px-5 py-3 transition-all hover:bg-greaterGreen-700 '
    : 'bg-greaterGreen-400 text-black rounded-full px-5 py-3 transition-all hover:bg-greaterGreen-700 hidden'

    return (
        <div className="w-full h-full bg-overBlack rounded-xl text-white">
            <div className='w-full pt-20 overflow-scroll h-auto min-h-full bg-gradient-to-t from-overBlack via-overBlack via-50%' style={styles}>
                    <div onClick={handleClose} className="lg:h-52 xl:h-64 pb-5 w-full relative flex flex-col md:flex-row gap-6 items-center">
                        <div className="w-[250px] md:w-[400px] lg:h-[180px] lg:w-[550px] xl:w-[470px] xl:h-[210px] 2xl:h-[230px] shadow-2xl 2xl:w-[430px] overflow-hidden md:ml-6 rounded-2xl">
                            <img className="w-full h-full object-cover" src={episode.images[0].url} alt={episode.name} />
                        </div>
                        <div className="flex items-center md:items-start flex-col z-20 gap-2 capitalize h-full justify-end text-white">
                            <span className="text-sm">
                                {episode.type} of podcast
                            </span>
                            <h1 className="text-2xl text-center md:text-left md:text-3xl xl:text-4xl 2xl:text-5xl font-bold">
                                {episode.name}
                            </h1>
                        </div>
                        <ColorExtractor 
                            src={episode.images[0].url} 
                            getColors={colors => setColor(colors)}
                        />
                    </div>
                    <div className="relative h-auto w-full">
                        <div className="h-full opacity-40 z-20 bg-overBlack absolute top-0 w-full">
                        </div>
                        <div className="pb-5 z-30 px-7 w-full h-auto flex flex-col items-start pt-8 relative">
                            <div className="flex flex-col gap-8">
                                <span className="text-sm text-overGray font-semibold">
                                    {
                                        date.getDay()+" "+getMonth(date.getMonth())+" • "+millisToMinutesAndSeconds(episode.duration_ms)
                                    }
                                </span>
                                <div className="flex gap-8">
                                    <button onClick={handlePlay} className={style}>
                                        <PlayAlbumIcon />
                                    </button>
                                    <button onClick={handlePause} className={style2}>
                                        <PauseIcon />
                                    </button>
                                    <button onClick={handleClick} className="text-primaryGray hidden lg:block hover:text-white transition-all">
                                        <AddToListIcon />
                                    </button>
                                    <button className="text-primaryGray hover:text-white transition-all">
                                        <MoreIcon />
                                    </button>
                                </div>
                                <div onClick={handleClose} className="flex flex-col gap-8 max-w-[700px]">
                                    <h2 className="text-bold tracking-tighter text-2xl font-bold">
                                        Descripcion del episodio
                                    </h2>
                                    {
                                        desc ? (
                                            <>
                                                <p className="text-overGray" dangerouslySetInnerHTML={{__html: episode.html_description }}>
                                                </p>
                                                <button className="mt-3 text-white w-[130px]" onClick={() => { setDesc(!desc) }}>
                                                    {
                                                        desc 
                                                        ? ('Mostrar menos')
                                                        : ('...Mostrar mas')
                                                    }
                                                </button>
                                            </>
                                        ) : (
                                            <>
                                                <p className="text-overGray" dangerouslySetInnerHTML={{__html: episode.html_description.slice(0,600) +"..."}}>
                                                </p>
                                                <button className="mt-3 text-white w-[130px]" onClick={() => { setDesc(!desc) }}>
                                                    {
                                                        desc 
                                                        ? ('Mostrar menos')
                                                        : ('...Mostrar mas')
                                                    }
                                                </button>
                                            </>
                                        )
                                    }
                                    <button onClick={() => setPage('podcasts')} className="border-[1px] w-[200px] rounded-full border-overGray text-overWhite py-1 px-3 text-sm transition-all hover:border-white hover:scale-105 font-bold ">
                                        Ver todos los episodios
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>  
                </div>
        </div>
    )
}