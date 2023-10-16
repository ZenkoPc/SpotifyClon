import { SpotifyIcon } from "../../icons/spotify"

type data = {
    id: string,
    name: string,
    owner: string,
    cover: string,
    tracks: string,
    numberTracks: number,
    desc: string,
    type: string,
}

export const PlaylistHeader = ({ playlist }:{ playlist: data }) => {
    return (
        <div className="absolute justify-end pb-4 px-4 top-0 w-full h-full flex flex-col gap-3 z-50">
            <span className=" text-[#FFFFFFB2] text-sm font-semibold capitalize">
                {playlist.type}
            </span>
            <h1 className="text-white font-bold text-3xl md:text-6xl xl:text-7xl 2xl:text-8xl">
                {playlist.name}
            </h1>
            <p className="text-sm md:mt-5 text-[#FFFFFFB2]">
                {playlist.desc}
            </p>
            <div className="flex xs:text-xs md:text-sm text-white font-medium items-center gap-2">                    <span className="flex gap-1 font-bold items-center">
                <SpotifyIcon w={25} h={25} /> {playlist.owner}
                </span>
                <span className="xs:block hidden">•</span>
                <p className="xs:block hidden">
                    100.000.000 me gusta
                </p>
                <span>•</span>
                <span>
                    {playlist.numberTracks} Canciones,
                </span>
                <p className="text-[#b3b3b3] hidden md:block">
                     2h 30 min aproximadamente
                </p>
            </div>
        </div>
    )
}