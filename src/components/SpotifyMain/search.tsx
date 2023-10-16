import { useSearchStore } from "../../store/useSearchStore"
import { DefaultSearch } from "./defaultSearch"
import { Loading } from "../loading"
import { useMusicStore } from "../../store/useMusicStore"
import { SelectedOption } from "../SpotifyLogic/selectedOption"
import { SearchOption } from "../SpotifyLogic/search"
import { useEffect } from "react"

type res = {
    id: string,
    name: string
    icon: string
}

export const Search = () => {
    const query = useSearchStore(store => store.query)
    const loading = useSearchStore(store => store.loading)
    const categories = useMusicStore(store => store.categories)
    const setInfo = useSearchStore(store => store.setResults)

    const validate = query !== '' 
    ? categories.map((ob: res) => { return ob.name === query ? true : false }).includes(true)
    : false
    
    useEffect(() => {
        validate && query !== ''
        ? setInfo(query)
        : setInfo(query)
    }, [query])

    return (
        <div className="w-full h-full pb-10 overflow-scroll overflow-x-hidden bg-overBlack rounded-lg">
            {loading && <Loading />}
            {!loading && query === '' && <DefaultSearch />}
            {!loading && !validate && query !== '' && <SearchOption /> }
            {!loading && validate && query !== '' && <SelectedOption /> }
        </div>
    )
}