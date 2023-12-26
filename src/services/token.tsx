const apiId = import.meta.env.VITE_SPOTIFY_API_ID
const apiSecret = import.meta.env.VITE_SPOTIFY_API_SECRET

export const getToken = async () => {
    const res = await fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: {
          "Content-type" : "application/x-www-form-urlencoded"
        },
        body: `grant_type=client_credentials&client_id=${apiId}&client_secret=${apiSecret}`
      })
      const json =await res.json()
      return json
}