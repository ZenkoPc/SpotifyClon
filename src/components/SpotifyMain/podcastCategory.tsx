import { usePodcastStore } from '../../store/usePodcastStore'
import { useEffect, useState } from 'react'
import { Loading } from '../loading'
import { Item } from '../../types/typesPodcast'
import { PodcastSection } from '../SpotifyLogic/podcastsSection'

export const PodcastCategory = () => {

    const podcastRes = usePodcastStore(store => store.getPodcasts)
    const categorySelected = usePodcastStore(store => store.categorySelected)
    const loading = usePodcastStore(store => store.loading)
    const [podcast, setPodcast] = useState<Item[]>([])
    const limit = usePodcastStore(store => store.limit)
    const setLimit = usePodcastStore(store => store.setLimit)

    useEffect(() => { 
        podcastRes(categorySelected.search).then(data => setPodcast(data))
    }, [])

    const handleClick = () => {
        setLimit(false)
    }

    const buttonStyle = limit 
    ? 'text-sm hover:underline font-medium text-overGray'
    : 'hidden'

    return (
        <>
            {loading && <Loading /> }
            {!loading &&
                <div className="w-full h-full bg-overBlack overflow-scroll overflow-x-hidden">
                    <div className='w-full h-96 z-10 overflow-hidden relative'>
                        <img className='w-full h-full object-cover object-top' src={categorySelected.img} alt='' />
                        <div className=' absolute bottom-12 left-7 text-white font-bold text-8xl'>
                            <h1>
                                {categorySelected.search}
                            </h1>
                        </div>
                    </div>
                    <div className='flex flex-col py-9 px-6 gap-7'>
                        <div className='flex justify-between items-center text-white'>
                            <button onClick={handleClick} className='font-bold text-2xl tracking-tighter hover:underline'>
                                Podcast Populares: {categorySelected.search}
                            </button>
                            <button onClick={handleClick} className={buttonStyle}>
                                Mostrar mas
                            </button>
                        </div>
                        <div className='grid grid-cols-fluid gap-5'>
                            <PodcastSection podcast={podcast} />
                        </div>
                    </div>
                </div>
            }
        </>
    )
}