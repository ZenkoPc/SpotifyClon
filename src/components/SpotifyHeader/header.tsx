import { MenuSpotifyIcon } from "../../icons/menuSpotify"
import { SearchIcon } from "../../icons/search"
import { SpotifyLogoRes } from "../../icons/spotifyLogoRes"

export const Header = () => {
    return (
        <div className="text-white h-16 flex justify-between items-center px-5 bg-black border-b-[1px] border-overGray">
            <div className="flex justify-center items-center">
                <SpotifyLogoRes />
            </div>
            <div className="flex gap-4 items-center md:gap-7">
                <div className="flex gap-2 md:gap-6 items-center">
                    <SearchIcon />
                    <a href="" className="bg-white hover:bg-overWhite transition-all text-black py-2 cursor-pointer px-4 rounded-full font-bold uppercase text-xs xs:text-sm">
                        Abrir La Aplicacion
                    </a>
                </div>
                <button>
                    <MenuSpotifyIcon />
                </button>
            </div>
        </div>
    )
}