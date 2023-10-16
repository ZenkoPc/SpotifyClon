import { useMusicStore } from "../store/useMusicStore"
import { usePlaylistStore } from "../store/usePlaylistStore"

export const ToolsBar = () => {

    const setLogin = useMusicStore(store => store.setLogin)
    const search = useMusicStore(store => store.search)
    const setSearch = useMusicStore(store => store.setSearch)
    const categories = useMusicStore<Array<object>>(store => store.categories)
    const getCategories= useMusicStore(store => store.fetchCategories)
    const getPlaylist = useMusicStore(store => store.fetchData)
    const clickAction = usePlaylistStore(store => store.clickAction)

    const handleChange = (e: HTMLSelectElement) => {
        const value = e.target.value
        setSearch(value)
    }

    const handleClick = () => {
        setLogin(true)
        getPlaylist(search)
        getCategories()
        clickAction('index')
    }

    return (
        <div className="flex flex-col gap-5 mt-5 mb-7 text-white">
            <label className="text-2xl font-semibold" htmlFor="playOps">Selecciona un genero:</label>
            <div className="flex flex-col sm:flex-row gap-5">
                <select className="py-1.5 px-2 rounded-lg bg-gray-900 border-2 border-greaterGreen-500 text-greaterGreen-600 w-40" 
                onChange={handleChange} value={search} name="playlistOptions" id="playOps">
                    {
                      categories.map((data: object) =>{ 
                       return (
                       <option key={data.id} value={data.id}>{data.name}</option>
                      )
                     })
                   }
              </select>
              <button className="w-40 border-0 bg-greaterGreen-500 py-2 px-7 rounded-3xl font-bold hover:bg-greaterGreen-600 transition-all" 
              onClick={handleClick}>Ver playlist</button>
            </div>
        </div>
    )
}