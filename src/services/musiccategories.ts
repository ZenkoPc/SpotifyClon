export const fetchCategories = async (token: string) => {
    const res = await fetch(`https://api.spotify.com/v1/browse/categories?country=ES&offset=0&limit=50`,{
      method: 'GET',
      headers: { 'Authorization' : `Bearer ${encodeURIComponent(token)}` }
    })
    const json = await res.json()
    return json
}