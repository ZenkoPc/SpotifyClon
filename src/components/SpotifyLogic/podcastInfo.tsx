import { PlayAlbumIcon } from "../../icons/playAlbum"
import { millisToMinutesAndSeconds } from "../../services/toMinutes"
import { useButtonsStore } from "../../store/useButtonsStore"
import { usePlaylistStore } from "../../store/usePlaylistStore"
import { usePodcastStore } from "../../store/usePodcastStore"
import { Item } from "../../types/typesPodcast"

export const PodcastInfo = () => {

    const podcast = usePodcastStore(store => store.podcastSelected)
    const needLoginModal = useButtonsStore(store => store.setListenLoginModal)
    const setPage = usePlaylistStore(store => store.setPage)
    const setEpisode = usePodcastStore(store => store.setEpisode)

    const handlePlay = () => {
        needLoginModal(true)
    }
    console.log(podcast)
    const handleClick = (ob: Item) => {
        setPage('episode')
        setEpisode(ob)
    }

    return (
        <>
            {
                podcast.episodes.items.map((ob, index) => {
                    return (
                        <div onClick={() => { handleClick(ob) }} className="p-5 hover:cursor-pointer flex flex-col items-center md:items-start md:flex-row gap-5 hover:bg-[#353536] transition-all border-t-2 last-of-type:border-b-2 border-[#353536]" key={ob.id}>
                            <div className="max-w-[120px] max-h-[120px] w-[2020px] h-[150px] rounded-lg overflow-hidden shadow-sm shadow-white">
                                <img className="w-full h-full" src={ob.images[1].url} alt={ob.name} />
                            </div>
                            <div className="flex flex-col gap-8 text-overGray">
                                <div className="flex flex-col gap-3">
                                    <h4 className="font-bold text-white">
                                        Ep. {podcast.episodes.items.length - index} - {ob.name}
                                    </h4>
                                    <p className="text-sm font-medium">
                                        {ob.description.slice(0,180)}...
                                    </p>
                                </div>
                                <div className="flex font-medium gap-2 items-center text-sm relative">
                                    <button onClick={handlePlay} className="text-black bg-white rounded-full p-1.5">
                                        <PlayAlbumIcon />
                                    </button>
                                    <p className="">
                                        {ob.release_date.toString()}
                                    </p>
                                    <span className="text-xs">
                                        •
                                    </span>
                                    <span>
                                        {millisToMinutesAndSeconds(ob.duration_ms)}
                                    </span>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}