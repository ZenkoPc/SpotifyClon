export const getArtistRelated = async (value: string, token: string) => {
    const res = await fetch(`https://api.spotify.com/v1/artists/${value}/related-artists`,{
        method: 'GET',
        headers: { 'Authorization' : `Bearer ${encodeURIComponent(token)}` }
    })
    const json = await res.json()
    return json
}