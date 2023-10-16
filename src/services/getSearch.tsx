export const getSearch = async (value: string, token: string) => {
    const res = await fetch(`https://api.spotify.com/v1/search?q=${value}&type=album%2Cartist%2Cplaylist%2Ctrack%2Cshow%2Cepisode&limit=50&offset=0&market=ES`,{
        method: 'GET',
        headers: { 'Authorization' : `Bearer ${encodeURIComponent(token)}` }
    })
    const json = await res.json()
    return json
}