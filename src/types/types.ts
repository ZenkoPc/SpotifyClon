export interface Results {
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
    type:          ResultType;
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

export enum ResultType {
    Playlist = "playlist",
}

export interface Categories {
    categories: CategoriesClass;
}

export interface CategoriesClass {
    href:     string;
    limit:    number;
    next:     string;
    offset:   number;
    previous: null;
    total:    number;
    items:    Item[];
}

export interface Item {
    href:  string;
    icons: Icon[];
    id:    string;
    name:  string;
}

export interface Icon {
    height: number | null;
    url:    string;
    width:  number | null;
}