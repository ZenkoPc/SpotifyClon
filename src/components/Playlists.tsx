import { Results } from "../types/types"
import { Recommended } from "./Recomended"

export const Playlists = ({ items }: { items: Results[]}) => {
    return (
        <>
            <Recommended items={items}/>
        </>
    )
}