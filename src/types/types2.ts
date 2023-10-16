export interface Featured {
    message:   string;
    playlists: Playlists;
}

export interface Playlists {
    href:     string;
    items:    Item[];
    limit:    number;
    next:     string;
    offset:   number;
    previous: null;
    total:    number;
}

export interface Item {
    collaborative: boolean;
    description:   string;
    external_urls: ExternalUrls;
    href:          string;
    id:            string;
    images:        Image[];
    name:          string;
    owner:         Owner;
    primary_color: null;
    public:        null;
    snapshot_id:   string;
    tracks:        Tracks;
    type:          ItemType;
    uri:           string;
}

export interface ExternalUrls {
    spotify: string;
}

export interface Image {
    height: null;
    url:    string;
    width:  null;
}

export interface Owner {
    display_name:  DisplayName;
    external_urls: ExternalUrls;
    href:          string;
    id:            ID;
    type:          OwnerType;
    uri:           URI;
}

export enum DisplayName {
    Spotify = "Spotify",
}

export enum ID {
    Spotify = "spotify",
}

export enum OwnerType {
    User = "user",
}

export enum URI {
    SpotifyUserSpotify = "spotify:user:spotify",
}

export interface Tracks {
    href:  string;
    total: number;
}

export enum ItemType {
    Playlist = "playlist",
}
