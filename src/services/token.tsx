const apiId = 'b5fed5be54ae4099bed1fadddc87d854'
const apiSecret = '09d958ed3373467bb67c0f050671e718'

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