import { SpotifyIcon } from "../icons/spotify"
import { usePlaylistStore } from "../store/usePlaylistStore"

export const NotFound = () => {

    const setPage = usePlaylistStore(store => store.setPage)

    return (
        <div className="h-full w-full bg-overBlack flex flex-col gap-3 justify-center items-center">
            <SpotifyIcon w={96} h={66} />
            <h1 className="text-white font-bold text-4xl">
                Seccion no encontrada
            </h1>
            <button onClick={() => setPage('index')} className="border-[1px] px-5 py-2 border-secondary text-white font-medium hover: border-white transition-all rounded-full text-sm">
                Volver al inicio
            </button>
        </div>
    )
}