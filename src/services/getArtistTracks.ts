export const getArtistTracks = async (value: string, token: string) => {
    const res = await fetch(`https://api.spotify.com/v1/artists/${value}/top-tracks?market=ES`,{
        method: 'GET',
        headers: { 'Authorization' : `Bearer ${encodeURIComponent(token)}` }
    })
    const json = await res.json()
    return json
}