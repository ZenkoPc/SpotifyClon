import { useEffect, useState } from "react"
import { useButtonsStore } from "../../store/useButtonsStore"

async function getLanguages() {
    const res = await fetch('mocks/languages.json')
    const data = await res.json()
    return data
}

export const Languages = () => {

    const [data, setData] = useState([])
    const setLanguage = useButtonsStore(store => store.setButtonLanguage)

    useEffect(() =>{
        getLanguages().then(data => setData(data))
    }, [])

    const handleClick = (value: string) => {
        setLanguage(value)
    }

    return (
        <>
            {
                data.map((ob, index) => {
                    return <button onClick={() => { handleClick(ob.language) }} key={index} className="p-4 hover:bg-overHighGray hover:cursor-pointer text-left">
                        <h3 className="font-bold text-sm">
                            {ob.language}
                        </h3>
                        <p className="text-primaryGray">
                            {ob.common}
                        </p>
                    </button>
                })
            }
        </>
    )
}