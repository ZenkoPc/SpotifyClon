import { useEffect, useState } from "react"
import { usePlaylistStore } from "../store/usePlaylistStore"
import { useMusicStore } from "../store/useMusicStore"
import { PlayIcon } from "../icons/play"
import { PauseIcon } from "../icons/pause"

const audio = new Audio('')

export const MusicList = ({ tracks }: { tracks: string }) => {

    const list = usePlaylistStore(store => store.tracks)
    const setTracks = usePlaylistStore(store => store.fetchTracks)
    const token = useMusicStore(store => store.token)
    const [audioState, setAudioState] = useState('')

    const items = list.items

    useEffect(() => {
        setTracks(tracks, token)
    }, [])

    const handleClick = (url : string) => {
        setAudioState(url)
        audio.pause()
        audio.src = url
        audio.play()
    }

    return (
        <>
            {
                list?.total
                ? (
                    <div className="mt-2 text-white bg-gradient-to-b from-strangeBlue via-black to-black">
                        <table className="border-separate border-spacing-4 text-left">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th></th>
                                    <th>Title</th>
                                    <th>Album</th>
                                    <th>Duration</th>
                                    <th>Added</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    items.map((music: object, index: number) => {
                                        
                                        const newDate = music.track.album.release_date.split('T') 
                                        return (
                                            <tr key={music.track.id}>
                                                <td>{index+1}</td>
                                                <td>
                                                    {
                                                        audioState === music.track.preview_url
                                                        ? (
                                                            <button onClick={() => handleClick(music.track.preview_url)}>
                                                                <PauseIcon />
                                                            </button>
                                                        ) : (
                                                            <button onClick={() => handleClick(music.track.preview_url)}>
                                                                <PlayIcon />
                                                            </button>
                                                        )
                                                    }
                                                </td>
                                                <td>{music.track.name}</td>
                                                <td>{music.track.album.name}</td>
                                                <td>{Math.floor(music.track.duration_ms / 1000 )}</td>
                                                <td>{newDate[0]}</td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                ) : (
                    <h2>Ocurrio un Error</h2>
                )
            }
        </>
    )
}