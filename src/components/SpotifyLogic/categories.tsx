import { useMusicStore } from "../../store/useMusicStore"
import { usePlaylistStore } from "../../store/usePlaylistStore"
import { usePodcastStore } from "../../store/usePodcastStore"

export const Categories = () => {

    const categories = useMusicStore(store => store.categories)
    const limit = usePodcastStore(store => store.limit)
    const setPage = usePlaylistStore(store => store.setPage)
    const setCategoryValues = usePodcastStore(store => store.setCategoryValues)
    const setLimit = usePodcastStore(store => store.setLimit)

    const handleClick = (value: string, search: string) => {
        setPage('podcastResult')
        setCategoryValues(value, search)
        setLimit(true)
    }

    return (
        <>
            {
                limit
                ? (
                    <>
                        {categories?.slice(0,7)?.map((ob) => {
                            return (
                                <div onClick={() => { handleClick(ob.icon, ob.name) }} className="relative group min-w-[170px] max-w-[190px] md:min-w-[180px]" key={ob.id}>
                                    <div className="flex flex-col justify-between w-full p-2 h-full hover:cursor-pointer rounded-lg hover:bg-overHighGray bg-overBlack2">
                                        <div className="w-full p-3 flex flex-col gap-4">
                                            <img className="rounded-xl shadow-sm shadow-black" src={ob.icon} alt={ob.name} />
                                            <h3 className="text-white text-left font-bold">
                                                {ob.name}
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </>
                ) : (
                    <>
                        {categories?.map((ob) => {
                            return (
                                <div onClick={() => { handleClick(ob.icon, ob.name)} } className="relative group min-w-[170px] max-w-[190px] md:min-w-[180px]" key={ob.id}>
                                    <div className="flex flex-col justify-between w-full p-2 h-full hover:cursor-pointer rounded-lg hover:bg-overHighGray bg-overBlack2">
                                        <div className="w-full p-3 flex flex-col gap-4">
                                            <img className="rounded-xl min-h-[140px] shadow-sm shadow-black" src={ob.icon} alt={ob.name} />
                                            <h3 className="text-white text-left font-bold">
                                                {ob.name}
                                            </h3>
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