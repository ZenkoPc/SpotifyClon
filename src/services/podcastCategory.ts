export const getPodcastCategory = async (value: string, token: string) => {
    const res = await fetch(`https://api.spotify.com/v1/search?q=${encodeURIComponent(value)}&type=show&market=ES&limit=50&offset=0`,{
      method: 'GET',
      headers: { 'Authorization' : `Bearer ${encodeURIComponent(token)}` }
    })
    const json = await res.json()
    return json
}