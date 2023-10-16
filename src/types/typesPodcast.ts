export interface Podcast {
    shows: Shows;
}

export interface Shows {
    href:     string;
    limit:    number;
    next:     string;
    offset:   number;
    previous: null;
    total:    number;
    items:    Item[];
}

export interface Item {
    available_markets:    string[];
    copyrights:           any[];
    description:          string;
    html_description:     string;
    explicit:             boolean;
    external_urls:        ExternalUrls;
    href:                 string;
    id:                   string;
    images:               Image[];
    is_externally_hosted: boolean;
    languages:            string[];
    media_type:           MediaType;
    name:                 string;
    publisher:            string;
    type:                 Type;
    uri:                  string;
    total_episodes:       number;
}

export interface ExternalUrls {
    spotify: string;
}

export interface Image {
    url:    string;
    height: number;
    width:  number;
}

export enum MediaType {
    Audio = "audio",
    Mixed = "mixed",
}

export enum Type {
    Show = "show",
}

export interface Podcasts {
    available_markets:    string[];
    copyrights:           any[];
    description:          string;
    episodes:             Episodes;
    explicit:             boolean;
    external_urls:        ExternalUrls;
    href:                 string;
    html_description:     string;
    id:                   string;
    images:               Image[];
    is_externally_hosted: boolean;
    languages:            Language[];
    media_type:           string;
    name:                 string;
    publisher:            string;
    total_episodes:       number;
    type:                 string;
    uri:                  string;
}

export interface Episodes {
    href:     string;
    items:    Item[];
    limit:    number;
    next:     string;
    offset:   number;
    previous: null;
    total:    number;
}

export interface Item {
    audio_preview_url:      string;
    description:            string;
    duration_ms:            number;
    explicit:               boolean;
    external_urls:          ExternalUrls;
    href:                   string;
    html_description:       string;
    id:                     string;
    images:                 Image[];
    is_externally_hosted:   boolean;
    is_playable:            boolean;
    language:               Language;
    languages:              Language[];
    name:                   string;
    release_date:           Date;
    release_date_precision: ReleaseDatePrecision;
    type:                   Type;
    uri:                    string;
}

export interface ExternalUrls {
    spotify: string;
}

export interface Image {
    height: number;
    url:    string;
    width:  number;
}

export enum Language {
    Es = "es",
}

export enum ReleaseDatePrecision {
    Day = "day",
}

export enum Type {
    Episode = "episode",
}
