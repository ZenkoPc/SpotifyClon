import { useEffect } from "react"
import { useButtonsStore } from "../../store/useButtonsStore"
import { usePodcastStore } from "../../store/usePodcastStore"
import { CloseIcon } from "../../icons/close"

export const LoginPodcastModal = () => {
    const defImg = usePodcastStore(store => store.modalImg)
    const modal = useButtonsStore(store => store.listenPodcastModal)
    const setModal = useButtonsStore(store => store.setListenPodcastModal)
    useEffect(() => { console.log(modal) }, [modal])
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
                <div className="relative rounded-xl overflow-hidden w-[300px] md:w-[800px] max-w-[450px] h-[500px] bg-[#323232]">
                    <div className="w-full h-full absolute top-0 bg-overBlack opacity-50">
                    </div>
                    <div className="flex flex-col justify-between gap-7 items-center w-full h-full p-7 absolute top-0">
                        <div className="flex w-full justify-between text-white font-bold text-2xl">
                            <h2 className="tracking-tighter">
                                Puntua el podcast
                            </h2>
                            <button onClick={handleClick}>
                                <CloseIcon />
                            </button>
                        </div>
                        <div className="md:w-48 mt-10 md:h-48 rounded-lg overflow-hidden">
                            <img src={defImg} className="w-full h-full object-cover" alt="default Img" />
                        </div>
                        <div className="text-center flex flex-col gap-3 text-white">
                            <h3 className="font-bold text-lg">
                                ¿Quieres puntuar este podcast?
                            </h3>
                            <p className="text-sm">
                                Ve a Spotify en el móvil para valorar este título.
                            </p>
                        </div>
                        <button onClick={handleClick} className="text-black font-bold bg-white hover:bg-overWhite transition-all hover:scale-105 py-3 px-7 rounded-full">
                            Ok
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}