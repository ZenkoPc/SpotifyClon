import { PodcastFolder } from "./SpotifyLogic/podcastFolder"
import { usePodcastStore } from "../store/usePodcastStore"
import { Categories } from "./SpotifyLogic/categories"

export const Podcasts = () => {

    const styleDefault = usePodcastStore(store => store.podcastStyle)
    const setStyle = usePodcastStore(store => store.setPodcastsStyle) 
    const setDefaultStyle = usePodcastStore(store => store.setDefaultStyle)
    const setLimit = usePodcastStore(store => store.setLimit)

    const handleClick = (value: string) => {
        setDefaultStyle(value)
        setLimit(false)
    }

    return (
                <div className="bg-overBlack w-full flex flex-col gap-9 h-full overflow-scroll overflow-x-hidden px-5 pt-10 pb-24 text-white">
                    <div className={setStyle('rock',styleDefault)}>
                        <div className="flex justify-between items-center">
                            <h2 className="font-bold text-2xl">
                                Podcasts más escuchados
                            </h2>
                            <button onClick={() => { handleClick('rock') }} className={styleDefault === 'rock' ? 'hidden' : 'text-overGray hover:underline transition-all font-bold text-sm'}>
                                Mostrar todos
                            </button>
                        </div>
                        <div className={styleDefault === 'rock' ? 'flex overflow-scroll overflow-y-hidden sm:grid sm:grid-cols-fluid gap-6' : 'flex gap-6 overflow-scroll overflow-y-hidden pb-3'}>
                            <PodcastFolder value='rock' />
                        </div>
                    </div>
                    <div className={setStyle('fantasia',styleDefault)}>
                        <div className="flex justify-between items-center">
                            <h2 className="font-bold text-2xl">
                                La realidad supera la ficcion
                            </h2>
                            <button onClick={() => { handleClick('fantasia') }} className={styleDefault === 'fantasia' ? 'hidden' : 'text-overGray hover:underline transition-all font-bold text-sm'}>
                                Mostrar todos
                            </button>
                        </div>
                        <div className={styleDefault === 'fantasia' ? 'flex overflow-scroll overflow-y-hidden sm:grid sm:grid-cols-fluid gap-6 ' : 'flex gap-6 overflow-scroll overflow-y-hidden pb-3'}>
                            <PodcastFolder value='fantasia' />
                        </div>
                    </div>
                    <div className={setStyle('categories',styleDefault)}>
                        <div className="flex justify-between items-center">
                            <h2 className="font-bold text-2xl">
                                Categorías
                            </h2>
                            <button onClick={() => { handleClick('categories') }} className={styleDefault === 'categories' ? 'hidden' : 'text-overGray hover:underline transition-all font-bold text-sm'}>
                                Mostrar todos
                            </button>
                        </div>
                        <div className={styleDefault === 'categories' ? 'flex overflow-scroll overflow-y-hidden sm:grid sm:grid-cols-fluid gap-6 ' : 'flex gap-6 overflow-scroll overflow-y-hidden pb-3'}>
                            <Categories />
                        </div>
                    </div>
                </div>
    )
}
