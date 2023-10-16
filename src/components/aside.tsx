import { GlobalIcon } from "../icons/GlobalIcons"
import { useButtonsStore } from "../store/useButtonsStore"
import { LoginModal } from "./SpotifyCard/loginModal"
import { PlaylistTools } from "./SpotifyCard/playlistTools"
import { ToolsCard } from "./SpotifyCard/toolsCard"

export const Aside = () => {
    const language = useButtonsStore(store => store.buttonLanguage)
    const setModal = useButtonsStore(store => store.setLanguageModal)

    const handleClick = () => {
        setModal(true)
    }

    return (
        <div className="flex flex-col gap-2 h-full">
            <div className="block bg-overBlack rounded-lg px-5">
                <ToolsCard />
            </div>
            <div className="bg-overBlack flex flex-col justify-between h-full rounded-lg pr-2 py-2">
                <div className="relative">
                    <PlaylistTools />
                    <LoginModal />
                </div>
                <div className="flex flex-col gap-7 p-5">
                    <a href="#" className="text-primaryGray text-xs hover:underline">Cookies</a>
                    <div>
                        <button onClick={handleClick} className=" transition-all hover:border-overGray flex gap-1 items-center text-white py-1.5 px-3 font-bold border-[1px] border-overGray rounded-full">
                            <GlobalIcon />
                            <span className="text-sm">{language}</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}