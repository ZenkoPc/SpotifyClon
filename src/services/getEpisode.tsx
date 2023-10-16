export const getEpisode = async (value: string, token: string) => {
    const res = await fetch(`https://api.spotify.com/v1/episodes/512ojhOuo1ktJprKbVcKyQ&market=ES`,{
      method: 'GET',
      headers: { 'Authorization' : `Bearer ${encodeURIComponent(token)}` }
    })
    const json = await res.json()
    return json
}