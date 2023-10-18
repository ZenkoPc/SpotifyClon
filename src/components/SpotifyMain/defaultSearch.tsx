import { useMusicStore } from "../../store/useMusicStore"
import randomColor from "randomcolor"
import { usePlaylistStore } from "../../store/usePlaylistStore"
import { useSearchStore } from "../../store/useSearchStore"
import { useButtonsStore } from "../../store/useButtonsStore"

export const DefaultSearch = () => {

    const categories = useMusicStore(store => store.categories)
    const setPage = usePlaylistStore(store => store.setPage)
    const setResults = useSearchStore(store => store.setResults)
    const setQuery = useSearchStore(store => store.setQuery)
    const setHeaderStyle = useButtonsStore(store => store.setHeaderStyle)

    const handlePodcast = () => {
        setPage('podcasts')
    }

    const handleClick = (value: string) => {
        setResults(value)
        setQuery(value)
        setHeaderStyle(false)
    }

    return (
        <div className="pt-28 px-5">
            <h1 className="text-2xl text-white font-bold tracking-tight">
                Explorar Todo
            </h1>
            <div className=" flex overflow-scroll overflow-y-hidden md:grid md:grid-cols-fluid gap-7 mt-10">
                <div onClick={handlePodcast} className="relative group min-w-[170px] max-w-[190px] md:min-w-[180px]">
                    <div className="flex flex-col relative justify-between w-full h-full hover:cursor-pointer rounded-lg" style={{ backgroundColor: randomColor() }}>
                        <div className="w-full p-3 relative flex flex-col overflow-hidden h-[170px] gap-4">
                            <h3 className="text-white absolute z-20 text-left font-bold text-xl">
                                Podcasts
                            </h3>
                            <img className="absolute -bottom-0 -right-7 rotate-12 h-[110px] shadow-md shadow-black" src={categories[0].icon} alt='categories podcast' />
                        </div>
                    </div>
                </div>
                {categories?.map((ob) => {
                    return (
                        <div onClick={() => { handleClick(ob.name) }} className="relative group min-w-[170px] max-w-[190px] md:min-w-[180px]" key={ob.id}>
                            <div className="flex flex-col relative justify-between w-full h-full hover:cursor-pointer rounded-lg" style={{ backgroundColor: randomColor() }}>
                                <div className="w-full p-3 relative flex flex-col overflow-hidden h-[170px] gap-4">
                                    <h3 className="text-white absolute z-20 text-left font-bold text-xl">
                                        {ob.name}
                                    </h3>
                                    <img className="absolute -bottom-0 -right-7 rotate-12 h-[110px] shadow-md shadow-black" src={ob.icon} alt={ob.name} />
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}