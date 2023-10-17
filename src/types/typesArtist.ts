//info

export interface ArtistInfo {
    external_urls: ExternalUrls;
    followers:     Followers;
    genres:        string[];
    href:          string;
    id:            string;
    images:        Image[];
    name:          string;
    popularity:    number;
    type:          string;
    uri:           string;
}

export interface ExternalUrls {
    spotify: string;
}

export interface Followers {
    href:  string;
    total: number;
}

export interface Image {
    url:    string;
    height: number;
    width:  number;
}

//albums

export interface ArtistAlbum {
    href:     string;
    limit:    number;
    next:     string;
    offset:   number;
    previous: string;
    total:    number;
    items:    Item[];
}

export interface Item {
    album_type:             string;
    total_tracks:           number;
    available_markets:      string[];
    external_urls:          ExternalUrls;
    href:                   string;
    id:                     string;
    images:                 Image[];
    name:                   string;
    release_date:           string;
    release_date_precision: string;
    restrictions:           Restrictions;
    type:                   string;
    uri:                    string;
    artists:                Artist[];
    album_group:            string;
}

export interface Artist {
    external_urls: ExternalUrls;
    href:          string;
    id:            string;
    name:          string;
    type:          string;
    uri:           string;
}

export interface ExternalUrls {
    spotify: string;
}

export interface Image {
    url:    string;
    height: number;
    width:  number;
}

export interface Restrictions {
    reason: string;
}

//tracks

export interface ArtistTracks {
    tracks: Track[];
}

export interface Track {
    album:             Album;
    artists:           TrackArtist[];
    available_markets: string[];
    disc_number:       number;
    duration_ms:       number;
    explicit:          boolean;
    external_ids:      ExternalIDS;
    external_urls:     ExternalUrls;
    href:              string;
    id:                string;
    is_playable:       boolean;
    linked_from:       LinkedFrom;
    restrictions:      Restrictions;
    name:              string;
    popularity:        number;
    preview_url:       string;
    track_number:      number;
    type:              string;
    uri:               string;
    is_local:          boolean;
}

export interface Album {
    album_type:             string;
    total_tracks:           number;
    available_markets:      string[];
    external_urls:          ExternalUrls;
    href:                   string;
    id:                     string;
    images:                 Image[];
    name:                   string;
    release_date:           string;
    release_date_precision: string;
    restrictions:           Restrictions;
    type:                   string;
    uri:                    string;
    artists:                AlbumArtist[];
}

export interface AlbumArtist {
    external_urls: ExternalUrls;
    href:          string;
    id:            string;
    name:          string;
    type:          string;
    uri:           string;
}

export interface ExternalUrls {
    spotify: string;
}

export interface Image {
    url:    string;
    height: number;
    width:  number;
}

export interface Restrictions {
    reason: string;
}

export interface TrackArtist {
    external_urls: ExternalUrls;
    followers:     Followers;
    genres:        string[];
    href:          string;
    id:            string;
    images:        Image[];
    name:          string;
    popularity:    number;
    type:          string;
    uri:           string;
}

export interface Followers {
    href:  string;
    total: number;
}

export interface ExternalIDS {
    isrc: string;
    ean:  string;
    upc:  string;
}

export interface LinkedFrom {
}

//related

export interface ArtistRelated {
    artists: Artist[];
}

export interface Artist {
    external_urls: ExternalUrls;
    followers:     Followers;
    genres:        string[];
    href:          string;
    id:            string;
    images:        Image[];
    name:          string;
    popularity:    number;
    type:          string;
    uri:           string;
}

export interface ExternalUrls {
    spotify: string;
}

export interface Followers {
    href:  string;
    total: number;
}

export interface Image {
    url:    string;
    height: number;
    width:  number;
}

