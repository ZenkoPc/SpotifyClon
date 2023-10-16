import { useState } from "react"
import { usePodcastStore } from "../../store/usePodcastStore"
import { Loading } from "../loading"
import { ColorExtractor } from 'react-color-extractor'
import { MoreIcon } from "../../icons/more"
import { useButtonsStore } from "../../store/useButtonsStore"
import { PodcastInfo } from "../SpotifyLogic/podcastInfo"
import { StarIcon } from "../../icons/star"

export const Podcast = () => {

    const loading = usePodcastStore(store => store.loading)
    const podcast = usePodcastStore(store => store.podcastSelected)
    const [color,setColor] = useState('#000000')
    const styles = { backgroundColor: color[1] }
    const login = useButtonsStore(store => store.setLoginState)
    const [desc, setDesc] = useState(false)
    const podImg = usePodcastStore(store => store.setModalImg)
    const loginModal = useButtonsStore(store => store.setListenPodcastModal)

    const handleRate = () => {
        loginModal(true)
        podImg(podcast.images[0].url)
    }

    const handleFollow = () => {
        login(true)
    }

    const style = podcast?.episodes?.total < 20
    ? 'w-full pt-20 overflow-scroll h-auto min-h-full bg-gradient-to-t from-overBlack via-overBlack via-50%'
    : 'w-full pt-20 overflow-scroll h-auto min-h-full bg-gradient-to-t from-overBlack via-overBlack via-[93%]'

    return (
        <>
            {loading && <Loading /> }
            {!loading && 
                <div className={style} style={styles}>
                    <div className="lg:h-52 xl:h-64 pb-5 w-full relative flex flex-col md:flex-row gap-6 items-center">
                        <div className="w-[250px] md:w-[200px] lg:h-[180px] lg:w-[220px] xl:w-[200px] xl:h-[210px] 2xl:h-[230px] shadow-2xl 2xl:w-[230px] overflow-hidden md:ml-6 rounded-2xl">
                            <img className="w-full h-full object-cover" src={podcast.images[0].url} alt={podcast.name} />
                        </div>
                        <div className="flex items-center md:items-start flex-col z-20 gap-2 capitalize h-full justify-end text-white">
                            <span className="text-sm">
                                {podcast.type}
                            </span>
                            <h1 className="text-2xl text-center md:text-left md:text-3xl xl:text-4xl 2xl:text-5xl font-bold">
                                {podcast.name}
                            </h1>
                            <h4 className="text-lg md:text-left md:text-xl xl:text-2xl font-bold">
                                {podcast.publisher}
                            </h4>
                        </div>
                        <ColorExtractor 
                            src={podcast.images[0].url} 
                            getColors={colors => setColor(colors)}
                        />
                    </div>
                    <div className="relative h-auto w-full">
                        <div className="h-full opacity-40 z-20 bg-overBlack absolute top-0 w-full">
                        </div>
                        <div className=" z-30 px-5 w-full h-auto flex flex-col items-start pt-5 relative">
                            <div className="flex items-center py-3 px-1 gap-8">
                                <button onClick={handleFollow} className=" border-[1px] border-primaryGray py-1 px-4 rounded-full text-sm text-white font-bold hover:border-white hover:scale-105 transition-all">
                                    Seguir
                                </button>
                                <button className="text-primaryGray hover:text-white transition-all hover:scale-105">
                                    <MoreIcon />
                                </button>
                            </div>
                            <div className="text-white z-30 mt-12 flex flex-col-reverse gap-12 xl:grid w-full xl:grid-cols-3 px-6 gap-x-12">
                                <section className="col-span-2">
                                    <h2 className="text-2xl font-bold tracking-tight">
                                        Todos los episodios
                                    </h2>
                                    <div className="mt-7">
                                        <PodcastInfo />
                                    </div>
                                </section>
                                <aside>
                                    <h2 className="text-2xl font-bold tracking-tight">
                                        Informacion
                                    </h2>
                                    <div className=" text-overGray font-medium flex flex-col">
                                        {
                                            podcast.description.length > 150
                                            ? (
                                                desc
                                            ? (
                                                <>
                                                    <p className="mt-5" dangerouslySetInnerHTML={{__html: podcast.html_description}}>
                                                    </p>
                                                    <div className="flex flex-col w-28 gap-4">
                                                        <button className="mt-6 text-white" onClick={() => { setDesc(!desc) }}>
                                                            {
                                                                desc 
                                                                ? ('Mostrar menos')
                                                                : ('...Mostrar mas')
                                                            }
                                                        </button>
                                                        <button onClick={handleRate} className="flex text-sm bg-overHighGray gap-1 items-center justify-center rounded-full py-1.5 hover:bg-[#353536] transition-all">
                                                            <span className="flex  items-center gap-1 text-white font-bold">
                                                                4,2
                                                                <StarIcon /> 
                                                            </span> 
                                                            (372)
                                                        </button>
                                                    </div>
                                                </>
                                            ) : (
                                                <>
                                                    <p className="mt-5" dangerouslySetInnerHTML={{__html: podcast.html_description.slice(0,230)}}>
                                                    </p>
                                                    <div className="flex flex-col w-28 gap-4">
                                                        <button className="mt-6 text-white" onClick={() => { setDesc(!desc) }}>
                                                            {
                                                                desc 
                                                                ? ('Mostrar menos')
                                                                : ('...Mostrar mas')
                                                            }
                                                        </button>
                                                        <button onClick={handleRate} className="flex text-sm bg-overHighGray gap-1 items-center justify-center rounded-full py-1.5 hover:bg-[#353536] transition-all">
                                                            <span className="flex  items-center gap-1 text-white font-bold">
                                                                4,2
                                                                <StarIcon /> 
                                                            </span> 
                                                            (372)
                                                        </button>
                                                    </div>
                                                </>
                                            )
                                            ) : (
                                                <>
                                                    <p className="mt-5" dangerouslySetInnerHTML={{__html: podcast.html_description}}>
                                                    </p>
                                                    <button onClick={handleRate} className="flex w-28 mt-4 text-sm bg-overHighGray gap-1 items-center justify-center rounded-full py-1.5 hover:bg-[#353536] transition-all">
                                                        <span className="flex  items-center gap-1 text-white font-bold">
                                                            4,2
                                                            <StarIcon /> 
                                                        </span> 
                                                        (372)
                                                    </button>
                                                </>
                                            )
                                        }
                                    </div>
                                </aside>
                            </div>
                        </div>
                    </div>  
                </div>
            }
        </>
    )
}