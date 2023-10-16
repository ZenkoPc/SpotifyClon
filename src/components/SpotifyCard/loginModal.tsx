import { useButtonsStore } from "../../store/useButtonsStore"

export const LoginModal = () => {
    const stateLogin = useButtonsStore(store => store.loginModalState)
    const setLoginState = useButtonsStore(store => store.setLoginState)

    const handleClick = () => {
        setLoginState(false)
    }

    const styles = stateLogin 
    ? 'bg-blue absolute top-12 flex flex-col gap-6 duration-700 transition-all opacity-100 -right-[345px] z-50 py-4 px-4 text-white rounded-lg'
    : 'bg-blue absolute top-12 flex w-0 h-0 overflow-hidden flex-col gap-6 opacity-0 -right-[365px] z-0 text-white rounded-lg'

    return (
        <>
            <div className={styles}>
                <div className="mr-9 flex flex-col gap-2">
                    <h3 className="font-bold text-xl">
                        Crear una lista
                    </h3>
                    <p className="font-medium text-sm">
                        Para crear y compartir listas, inicia sesión.
                    </p>
                </div>
                <div className="w-full flex justify-end gap-4">
                    <button onClick={handleClick} className="text-primaryGray font-bold text-sm transition-all hover:scale-105 hover:text-white">
                        Ahora no
                    </button>
                    <button className="text-black font-bold text-sm bg-white py-1.5 px-4 rounded-3xl transition-all hover:scale-[101%] hover:bg-overWhite">
                        Iniciar Sesión
                    </button>
                </div>
                <div className="absolute h-3 w-3 top-2/4 -left-1">
                    <div className="bg-blue w-3 h-3 rotate-45">
                    </div>
                </div>
            </div>
        </>
    )
}