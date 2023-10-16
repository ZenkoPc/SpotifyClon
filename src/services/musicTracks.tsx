export const getMusicTracks = async (url: string, token: string) => {

    const res = await fetch(url, {
        method: 'GET',
        headers: { 'Authorization' : `Bearer ${encodeURIComponent(token)}`}
    })
    const json = await res.json()
    return json
}