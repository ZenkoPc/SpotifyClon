import { CloseIcon } from "../icons/close"
import { useButtonsStore } from "../store/useButtonsStore"

export const MenuResponsive = () => {

    const close = useButtonsStore(store => store.menuState)
    const setClose = useButtonsStore(store => store.setMenuState)

    const style = close 
    ? 'absolute transition-all flex-col gap-8 h-full top-0 right-0 text-white bg-black z-50 w-0 overflow-hidden p-0' 
    : 'absolute transition-all py-7 px-5 flex flex-col gap-8 w-full md:w-96 lg:w-0 h-full top-0 right-0 text-white bg-black z-50'

    return (
        <div className={style}>
            <div className="w-full flex justify-end">
                <button onClick={() => { setClose(true) }}>
                    <CloseIcon />
                </button>
            </div>
            <div className="text-white font-bold text-2xl px-6">
                <ul className="flex flex-col gap-4">
                    <li className="mb-5">
                        <a href="#">
                            Iniciar Sesion
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            Registrate
                        </a>
                    </li>
                    <li>
                        -
                    </li>
                    <li className="text-xl">
                        <a href="#">
                            Premium
                        </a>
                    </li>
                    <li className="text-xl">
                        <a href="#">
                            Ayuda
                        </a>
                    </li>
                    <li className="text-xl">
                        <a href="#">
                            Descargar
                        </a>
                    </li>
                    <li className="text-xl">
                        <a href="#">
                            Privacidad
                        </a>
                    </li>
                    <li className="text-xl">
                        <a href="#">
                            Condiciones
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}