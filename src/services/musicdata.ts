export const fetchPlaylist = async (genre: string, token: string) => {
    const res = await fetch(`https://api.spotify.com/v1/browse/categories/${genre}/playlists?limit=20&offset=0`,{
      method: 'GET',
      headers: { 'Authorization' : `Bearer ${encodeURIComponent(token)}` }
    })
    const json = await res.json()
    return json
}