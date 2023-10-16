import { useButtonsStore } from "../../store/useButtonsStore"

export const CreatePlaylist = () => {
    const setLoginState = useButtonsStore(store => store.setLoginState)
    const setOptions = useButtonsStore(store => store.setLibraryOptions)

    const handleClick = () => {
        setLoginState(true)
        setOptions(false)
    }

    return (
        <div className="bg-secondary relative p-4 ml-2 mt-5 rounded-lg text-white">
            <h3 className="font-bold">
                Crea tu primera lista
            </h3>
            <p className="mt-2.5 text-sm font-medium">
                Es muy facil, y te echaremos una mano.
            </p>
            <button onClick={handleClick} className="bg-white mt-5 text-black hover:bg-overWhite text-sm py-1.5 px-4 transition-all hover:scale-105 rounded-full font-bold">
                <span>Crear Lista</span>
            </button>
        </div>
    )
}