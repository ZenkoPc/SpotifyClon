export interface Root {
    albums: Albums
    artists: Artists
    tracks: Tracks
    playlists: Playlists
    shows: Shows
    episodes: Episodes
  }
  
  export interface Albums {
    href: string
    items: Item[]
    limit: number
    next: string
    offset: number
    previous: any
    total: number
  }
  
  export interface Item {
    album_type: string
    artists: Artist[]
    available_markets: string[]
    external_urls: ExternalUrls2
    href: string
    id: string
    images: Image[]
    name: string
    release_date: string
    release_date_precision: string
    total_tracks: number
    type: string
    uri: string
  }
  
  export interface Artist {
    external_urls: ExternalUrls
    href: string
    id: string
    name: string
    type: string
    uri: string
  }
  
  export interface ExternalUrls {
    spotify: string
  }
  
  export interface ExternalUrls2 {
    spotify: string
  }
  
  export interface Image {
    height: number
    url: string
    width: number
  }
  
  export interface Artists {
    href: string
    items: Item2[]
    limit: number
    next: string
    offset: number
    previous: any
    total: number
  }
  
  export interface Item2 {
    external_urls: ExternalUrls3
    followers: Followers
    genres: string[]
    href: string
    id: string
    images: Image2[]
    name: string
    popularity: number
    type: string
    uri: string
  }
  
  export interface ExternalUrls3 {
    spotify: string
  }
  
  export interface Followers {
    href: any
    total: number
  }
  
  export interface Image2 {
    height: number
    url: string
    width: number
  }
  
  export interface Tracks {
    href: string
    items: Item3[]
    limit: number
    next: string
    offset: number
    previous: any
    total: number
  }
  
  export interface Item3 {
    album: Album
    artists: Artist3[]
    available_markets: string[]
    disc_number: number
    duration_ms: number
    explicit: boolean
    external_ids: ExternalIds
    external_urls: ExternalUrls7
    href: string
    id: string
    is_local: boolean
    name: string
    popularity: number
    preview_url?: string
    track_number: number
    type: string
    uri: string
  }
  
  export interface Album {
    album_type: string
    artists: Artist2[]
    available_markets: string[]
    external_urls: ExternalUrls5
    href: string
    id: string
    images: Image3[]
    name: string
    release_date: string
    release_date_precision: string
    total_tracks: number
    type: string
    uri: string
  }
  
  export interface Artist2 {
    external_urls: ExternalUrls4
    href: string
    id: string
    name: string
    type: string
    uri: string
  }
  
  export interface ExternalUrls4 {
    spotify: string
  }
  
  export interface ExternalUrls5 {
    spotify: string
  }
  
  export interface Image3 {
    height: number
    url: string
    width: number
  }
  
  export interface Artist3 {
    external_urls: ExternalUrls6
    href: string
    id: string
    name: string
    type: string
    uri: string
  }
  
  export interface ExternalUrls6 {
    spotify: string
  }
  
  export interface ExternalIds {
    isrc: string
  }
  
  export interface ExternalUrls7 {
    spotify: string
  }
  
  export interface Playlists {
    href: string
    items: Item4[]
    limit: number
    next: string
    offset: number
    previous: any
    total: number
  }
  
  export interface Item4 {
    collaborative: boolean
    description: string
    external_urls: ExternalUrls8
    href: string
    id: string
    images: Image4[]
    name: string
    owner: Owner
    primary_color: any
    public: any
    snapshot_id: string
    tracks: Tracks2
    type: string
    uri: string
  }
  
  export interface ExternalUrls8 {
    spotify: string
  }
  
  export interface Image4 {
    height?: number
    url: string
    width?: number
  }
  
  export interface Owner {
    display_name: string
    external_urls: ExternalUrls9
    href: string
    id: string
    type: string
    uri: string
  }
  
  export interface ExternalUrls9 {
    spotify: string
  }
  
  export interface Tracks2 {
    href: string
    total: number
  }
  
  export interface Shows {
    href: string
    items: any[]
    limit: number
    next: string
    offset: number
    previous: any
    total: number
  }
  
  export interface Episodes {
    href: string
    items: any[]
    limit: number
    next: string
    offset: number
    previous: any
    total: number
  }
  