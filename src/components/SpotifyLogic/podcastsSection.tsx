import { usePlaylistStore } from "../../store/usePlaylistStore"
import { usePodcastStore } from "../../store/usePodcastStore"
import { Item, Podcast } from "../../types/typesPodcast"

interface Res {
    podcast: Podcast
}

export const PodcastSection = (podcast: Res) => {
   console.log(podcast)
    const setPodcast = usePodcastStore(store => store.setPodcastSelected)
    const setPage = usePlaylistStore(store => store.setPage)
    const limit = usePodcastStore(store => store.limit)

    const handleClick = (value: string) => {
        setPodcast(value)
        setPage('podcast')
    }
    
    return (
        <>
            {
                limit
                ? (
                    <>
                        {podcast?.podcast?.shows?.items?.slice(0,7)?.map((ob: Item) => {
                            return (
                                    <div onClick={() => { handleClick(ob.id) }} className="relative group min-w-[170px] max-w-[190px] md:min-w-[180px]" key={ob.id}>
                                        <div className="flex flex-col justify-between w-full p-2 h-full hover:cursor-pointer rounded-lg hover:bg-overHighGray bg-overBlack2">
                                            <div className="p-2 h-40 relative">
                                                <img className="w-full rounded-lg h-full" src={ob.images[1].url} alt="" />
                                            </div>
                                            <div className="w-full p-3">
                                                <h3 className="text-white font-bold">
                                                    {ob.name}
                                                </h3>
                                            </div>
                                            <div className="pl-3">
                                                <p className="text-sm text-primaryGray font-semibold">
                                                    {ob.publisher}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                            )
                        })}
                    </>
                ) : (
                    <>
                        {podcast?.podcast?.shows?.items.map((ob: Item) => {
                            return (
                                    <div onClick={() => { handleClick(ob.id) }} className="relative group min-w-[170px] max-w-[170px] md:min-w-[180px]" key={ob.id}>
                                        <div className="flex flex-col justify-between w-full p-2 h-full hover:cursor-pointer rounded-lg hover:bg-overHighGray bg-overBlack2">
                                            <div className="p-2 h-40 relative">
                                                <img className="w-full rounded-lg h-full" src={ob.images[1].url} alt="" />
                                            </div>
                                            <div className="w-full p-3">
                                                <h3 className="text-white font-bold">
                                                    {ob.name}
                                                </h3>
                                            </div>
                                            <div className="pl-3">
                                                <p className="text-sm text-primaryGray font-semibold">
                                                    {ob.publisher}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                            )
                        })}
                    </>
                )
            }
        </>
    )
}