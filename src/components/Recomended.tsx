import { usePlaylistStore } from "../store/usePlaylistStore"
import { Results } from "../types/types"
import { Buttons } from "./buttons"
import { MusicReproductor } from "./musicRepro"

export const Recommended = ({ items }: { items: Results[]}) => {
    const handleClick = usePlaylistStore(store => store.handleClick)
    const currentPage = usePlaylistStore(store => store.currentPage)
    const validate = currentPage === 'index'
    const arr: Array<string> = [] 

    const styles = validate ?
    {background: '#1a1a1a'}:{background:'#21c7c7d8'}

    return (
        <div className='flex w-full transition-all flex-col max-w-5xl mx-auto my-0 rounded-lg border-2 border-greaterGreen-500' style={styles}>
            {
            validate
                ? (
                    <>
                        <Buttons />
                        <h1 className="text-white text-3xl font-bold ml-5 mb-7">Hecho para User123</h1>
                        <div className="flex overflow-scroll overflow-y-hidden gap-8 pl-5 mb-7 mx-5">
                            {items.map((res, index) => {
                                const artist = items[index]?.description
                                const validate = arr.includes(res.id)
                                arr.push(res.id)
                                if(validate === false){
                                    return (
                                        <div onClick={() => handleClick(res,artist)} className="flex flex-col hover:cursor-pointer rounded-lg bg-cod-gray-900 mb-5" key={res.id}>
                                            <div className="p-2 w-44">
                                                <img className="rounded-" src={res.images[0].url} alt="" />
                                            </div>
                                            <div className="w-full">
                                                <div className="flex flex-col p-3 justify-between h-36 gap-5">
                                                    <h2 className="text-xl text-white font-bold">{res.name}</h2>
                                                    <span className="text-white font-semibold">Total Songs:{res.tracks.total}</span>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }
                            })}
                        </div>
                    </>
                ): (
                    <MusicReproductor />
                )
            }
        </div>
    )
}
