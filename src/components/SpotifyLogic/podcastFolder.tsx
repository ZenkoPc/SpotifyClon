import { CircularProgress } from "@mui/material"
import { usePodcastStore } from "../../store/usePodcastStore"
import { PodcastSection } from "./podcastsSection"
import { useEffect, useState } from "react"

export const PodcastFolder = ({ value } : { value:string }) => {

    const getPodcast = usePodcastStore(store => store.getPodcasts)
    const loading = usePodcastStore(store => store.loading)
    const [podcast, setPodcast] = useState({})

    useEffect(() => {
        getPodcast(value).then(val => setPodcast(val))
    }, [])

    return (
        <>
            {loading && <CircularProgress color="success" />}
            {!loading && <PodcastSection podcast={podcast} />}
        </>
    )
}
