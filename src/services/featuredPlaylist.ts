export const featuredPlaylist = async (token: string) => {
    const res = await fetch(`https://api.spotify.com/v1/browse/featured-playlists?limit=10&offset=0`,{
      method: 'GET',
      headers: { 'Authorization' : `Bearer ${encodeURIComponent(token)}` }
    })
    const json = await res.json()
    return json
}