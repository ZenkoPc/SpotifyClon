import { SpotifyIcon } from "../icons/spotify"
import { usePlaylistStore } from "../store/usePlaylistStore"
import { MusicList } from "./MusicList"
import { Buttons } from "./buttons"

export const MusicReproductor = () => {
    const playlist = usePlaylistStore(store => store.playlist)
    const artist = usePlaylistStore(store => store.artist)
    
    return (
        <div className="Reproductor">
            <Buttons />
            {
                playlist?.id ? (
                    <>
                    <div className="flex mt-14 gap-7 pl-10 w-full pb-10">
                        <div className=" shadow-xl rounded-md overflow-hidden w-60">
                            <img width={230} src={playlist.cover} alt={playlist.name} />
                        </div>
                        <div className="flex flex-col font-bold text-white justify-around">
                            <span className=" text-lg text-cod-gray-700">Playlist</span>
                            <h2 className=" text-6xl">{playlist.name}</h2>
                            <span className=" text-lg text-cod-gray-700">{artist}</span>
                            <p className="flex gap-3 items-center">
                                <SpotifyIcon w={35} h={35} />
                                {playlist.owner}
                            </p>
                        </div>
                    </div>
                    <MusicList tracks={playlist.tracks} />
                    </>
                ) : (
                    <h2>Ocurrio un Error</h2>
                )
            }
        </div>
    )
}