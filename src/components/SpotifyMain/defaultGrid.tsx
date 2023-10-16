import { useMusicStore } from "../../store/useMusicStore"
import { Featured } from "../../types/types2"
import { PlaylistCards } from "../SpotifyLogic/playlistCards"

export const DefaultGrid = () => {

    const playlists: Featured = useMusicStore(store => store.defaultPlatlist)

    return (
        <>
            <PlaylistCards items={playlists?.playlists?.items} />
        </>
    )
}