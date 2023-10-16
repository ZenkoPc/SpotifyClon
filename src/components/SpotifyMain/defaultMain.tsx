import { DefaultGrid } from "./defaultGrid"
import { useMusicStore } from "../../store/useMusicStore"

export const DefaultMain = () => {

    const limit = useMusicStore(store => store.limit)
    const setLimit = useMusicStore(store => store.setLimit)
    const styles = limit ?
    'text-overGray hover:underline transition-all font-bold text-sm'
    : 'hidden'
    const styles2 = limit ?
    'text-white tracking-tighter hover:underline transition-all font-bold text-2xl'
    : 'text-white tracking-tighter transition-all font-bold text-2xl'

    const handleClick = () => {
        setLimit()
    }

    return (
        <div className="px-6 h-full overflow-scroll overflow-x-hidden">
            <div className="flex justify-between">
                <button onClick={handleClick} disabled={!limit} className={styles2}>
                    Listas de Spotify
                </button>
                <button onClick={handleClick} disabled={!limit} className={styles}>
                    Mostrar todos
                </button>
            </div>
            <div className="
                md:grid md:grid-cols-fluid py-7 gap-y-5 gap-x-6
                flex overflow-scroll md:overflow-x-hidden md:pb-24 lg:pb-7
            ">
                <DefaultGrid />
            </div>
        </div>
    )
}