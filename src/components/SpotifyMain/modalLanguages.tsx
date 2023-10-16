import { CloseIcon } from "../../icons/close"
import { useButtonsStore } from "../../store/useButtonsStore"
import { Languages } from "../SpotifyLogic/languages"

export const ModalLanguages = () => {
  const setModal = useButtonsStore(store => store.setLanguageModal)

    const handleClick = () => {
        setModal(false)
    }
    
    return (
        <div className=" bg-overBlack2 rounded-xl text-white w-[900px] h-[550px] overflow-hidden pb-4">
            <div className="flex justify-between gap-5 text-white px-6 py-5 border-b-[1px] border-secondary">
              <div className="flex flex-col gap-5">
                <h2 className="text-2xl font-bold">
                  Elige un idioma
                </h2>
                <p>
                  Se cambiará el idioma del contenido de clon.spotify.com.
                </p>
              </div>
              <div>
                <button onClick={handleClick} className="bg-black rounded-full p-2 hover:bg-overBlack transition-all">
                  <CloseIcon />
                </button>
              </div>
            </div>
            <div className="grid grid-cols-4 mb-4 px-6 py-2 overflow-scroll overflow-x-hidden max-h-96">
              <Languages />
            </div>
          </div>
    )
}