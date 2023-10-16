import { useEffect } from "react"
import { useMusicStore } from "./store/useMusicStore"
import { Aside } from "./components/aside"
import { Content } from "./components/content"
import { Footer } from "./components/SpotifyFooter/footer"
import { ModalLanguages } from "./components/SpotifyMain/modalLanguages"
import { useButtonsStore } from "./store/useButtonsStore"
import { LoginModal } from "./components/SpotifyMain/loginModal"
import { Header } from "./components/SpotifyHeader/header"
import { LoginPodcastModal } from "./components/SpotifyMain/podcastModal"

function App() {

  const getPlaylist = useMusicStore(store => store.featuredPlaylist)
  const modal = useButtonsStore(store => store.languageModal)
  const setModal = useButtonsStore(store => store.setLanguageModal)
  const getToken = useMusicStore(store => store.setToken)
  const setCategories = useMusicStore(store => store.fetchCategories)

    const handleClick = () => {
        setModal(false)
    }

  const styles = modal 
  ? 'absolute opacity-100 h-full w-full z-50 flex justify-center items-center block'
  : 'hidden absolute opacity-0 h-full w-full z-50 flex justify-center items-center'

  const styles2 = modal
  ? 'absolute h-full w-full transition-all bg-black z-40 opacity-80 block'
  : 'hidden absolute h-full w-full transition-all bg-black z-40 opacity-80'

  useEffect(() => {
    getToken()
    getPlaylist()
    setCategories()
  }, [])

  return (
    <>
      <div className="flex flex-col h-[100%] lg:p-2 gap-2 relative">
        <div className="flex flex-col lg:flex-row h-full sm:h-[92%] lg:gap-2 overflow-hidden relative">
          <header className="block lg:hidden">
            <Header />
          </header>
          <aside className="hidden lg:block min-w-[280px] z-20 w-[545px] h-full">
            <Aside />
          </aside>
          <main className=" w-full h-[100%] relative z-10 overflow-hidden">
            <Content />
          </main>
          <div className={styles2}>
          </div>
          <div onClick={handleClick} className={styles}>
            <ModalLanguages />
          </div>
        </div>
        <footer className="hidden sm:flex h-[10%] md:h-[8%] z-10 px-5 text-white justify-between items-center bg-gradient-to-r from-purple to-weirdBlue">
          <Footer />
        </footer>
      </div>
      <LoginModal />
      <LoginPodcastModal />
    </>
  )
}

export default App
