import { SpotifyIcon } from "../icons/spotify"

export const Logo = () => {
    return (
        <div className="flex w-auto flex-row items-center mt-5 gap-3">
            <h1 className="text-white text-3xl font-bold">
                Spotify
            </h1><SpotifyIcon w={30} h={30} />
        </div>
    )
}