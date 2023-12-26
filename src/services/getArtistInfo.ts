export const getArtistInfo = async (value: string, token: string) => {
    console.log(value)
    const res = await fetch('https://api.spotify.com/v1/artists/'+value,{
        method: 'GET',
        headers: { 'Authorization' : `Bearer ${encodeURIComponent(token)}` }
    })
    const json = await res.json()
    return json
}