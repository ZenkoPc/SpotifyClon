import { useState } from "react"
import { NextIcon } from "../../icons/next"
import { PrevIcon } from "../../icons/prev"
import { CloseIcon } from "../../icons/close"
import { useButtonsStore } from "../../store/useButtonsStore"
import { SearchIcon } from "../../icons/search"
import debounce from 'just-debounce-it'
import { useSearchStore } from "../../store/useSearchStore"
import { usePlaylistStore } from "../../store/usePlaylistStore"

export const TopTools = () => {

    const [disabled, setDisabled] = useState(true)
    const styles = disabled ? 'text-primaryGray bg-overTransparentBlack p-2 rounded-full' : 'text-white bg-overBlack2 p-2 rounded-full'
    const login = useButtonsStore(store => store.noLoginMadeModal)
    const setLogin = useButtonsStore(store => store.setNoLoginMadeModal)
    const setQuery = useSearchStore(store => store.setQuery)
    const page = usePlaylistStore(store => store.currentPage)
    const headerStyle = useButtonsStore(store => store.styleHeader)

    const style = login 
    ? 'bg-[#0D72EA] transition-all flex flex-col gap-1 py-4 px-6 rounded-xl text-white absolute top-16 right-0'
    : 'hidden'

    const handleClose = () => {
        setLogin(false)
    }

    const styleSearch = page === 'search'
    ? 'relative w-96'
    : 'hidden'

    const handleChange = debounce((e) => {
        setQuery(e.target.value)
    }, 500)

    return (
        <>
            <div className={headerStyle ? 'bg-overBlack opacity-100 h-full' : 'bg-black opacity-50 h-full'}>
            </div>
            <div className="flex text-white items-center gap-2 absolute top-4 left-6">
                <button className={styles} disabled={disabled}>
                    <PrevIcon />
                </button>
                <button className={styles} disabled={disabled}>
                    <NextIcon />
                </button>
                <div className={styleSearch}>
                    <div className="absolute top-2 left-3">
                        <SearchIcon />
                    </div>
                    <input onChange={handleChange} type="text" placeholder="¿Que te apetece escuchar?" className="text-sm px-10 py-2.5 rounded-full bg-overHighGray text-white" />
                </div>
            </div>
            <div className="font-bold absolute flex items-start mt-3 h-full gap-8 top-0 right-6">
                <div className="hidden 2xl:flex 2xl:mt-3 text-primaryGray border-r-0 pr-7 gap-2 tracking-widest">
                    <a href="#" className="hover:text-white hover:scale-105 transition-all">Premium</a>
                    <a href="#" className="hover:text-white hover:scale-105 transition-all">Asistencia</a>
                    <a href="#" className="hover:text-white hover:scale-105 transition-all">Descargar</a>
                </div>
                <div className="flex gap-8 items-center relative hidden">
                    <a href="#" className="text-primaryGray transition-all hover:text-white hover:scale-105">
                        Registrarte
                    </a>
                    <a href="#" className="text-black bg-white py-3 px-8 rounded-3xl transition-all hover:bg-overWhite hover:scale-105">
                        Iniciar sesión
                    </a>
                    <div className={style}>
                        <div className="bg-[#0D72EA] rotate-45 w-3 h-3 absolute -top-1.5 right-12">

                        </div>
                        <div className="flex gap-12 justify-between">
                            <h4>
                                No hay Sesion abierta
                            </h4>
                            <button onClick={handleClose}>
                                <CloseIcon />
                            </button>
                        </div>
                        <p className="text-sm font-normal">
                            Para continuar, inicia sesion.
                        </p>
                    </div>
                </div>
            </div>
        </>
        
    )
}