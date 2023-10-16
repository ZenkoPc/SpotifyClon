import { useButtonsStore } from "../../store/useButtonsStore"
import { usePlaylistStore } from "../../store/usePlaylistStore"

export const LoginModal = () => {
    const defImg = usePlaylistStore(store => store.defaultImg)
    const modal = useButtonsStore(store => store.listenLoginModal)
    const setModal = useButtonsStore(store => store.setListenLoginModal)

    const styles = modal
    ? 'absolute h-full w-full transition-all bg-black z-[55] top-0 opacity-80 duration-700'
    : 'absolute h-full w-full transition-all bg-black z-[0] top-0 opacity-0 duration-700'

    const styles2 = modal
    ? 'absolute flex flex-col gap-6 transition-all justify-center items-center top-0 w-full h-full z-[60] opacity-100 duration-500'
    : 'absolute flex flex-col gap-6 transition-all justify-center items-center top-0 w-full h-full z-[0] opacity-0 duration-500'

    const handleClick = () => {
        setModal(false)
    }
    
    return (
        <>
            <div onClick={handleClick} className={styles}>
            </div>
            <div className={styles2}>
                <div className="relative rounded-xl overflow-hidden lg:w-[800px] lg:h-[400px] md:w-[600px] md:h-[550px] lg:max-w-[800px] w-full h-full bg-[#777777] ">
                    <div className="w-full h-full absolute top-0 bg-overBlack opacity-50">
                    </div>
                    <div className=" bg-gradient-to-t flex flex-col lg:flex-row justify-center gap-7 items-center from-overBlack w-full h-full p-16 absolute top-0">
                        <div className="hidden xs:block xs:w-[200px] xs:h-[250px] lg:w-[500px] lg:max-w-[500px] rounded-lg overflow-hidden">
                            <img src={defImg} className="w-full h-full" alt="default Img" />
                        </div>
                        <div className="text-white text-center flex gap-6 flex-col h-full">
                            <h1 className="font-bold md:text-2xl lg:text-[32px]">
                                Empieza a escuchar con una cuenta de Spotify gratis
                            </h1>
                            <div className="flex flex-col gap-5">
                                <div>
                                    <button className="bg-[#1ed750] hover:bg-greaterGreen-500 text-black font-bold  transition-all hover:scale-105 px-3 py-1.5 xs:py-3 xs:px-7 rounded-full xs:text-sm">
                                        Regístrate Gratis
                                    </button>
                                </div>
                                <div>
                                    <button className="border-[1px] border-overGray transition-all hover:scale-105 hover:border-white rounded-full py-1.5 px-3 xs:py-3 xs:px-9 font-bold xs:text-sm">
                                        Descargar aplicación
                                    </button>
                                </div>
                            </div>
                            <div className="flex flex-col xs:flex-row justify-center gap-4">
                                <p className=" text-primaryGray font-semibold">
                                    ¿Ya tienes cuenta?
                                </p>
                                <a href="#" className="hover:underline transition-all font-semibold">
                                    Iniciar Sesión
                                </a>
                            </div>
                            <button onClick={handleClick} className="text-white md:hidden hover:scale-105 transition-all hover:text-white font-bold">
                                Cerrar
                            </button>
                        </div>
                    </div>
                </div>
                <button onClick={handleClick} className="text-overGray hidden md:block hover:scale-105 transition-all hover:text-white font-bold">
                    Cerrar
                </button>
            </div>
        </>
    )
}