import { PlayAlbumIcon } from "../../icons/playAlbum"
import { useButtonsStore } from "../../store/useButtonsStore"
import { useMusicStore } from "../../store/useMusicStore"
import { usePlaylistStore } from "../../store/usePlaylistStore"
import {  Item } from "../../types/types2"

export const PlaylistCards = (playlist: Item) => {
    const arr = Object.values(playlist)
    const limit = useMusicStore(store => store.limit)
    const setLoginModal = useButtonsStore(store => store.setListenLoginModal)
    const setProps = usePlaylistStore(store => store.handleClick)
    const setPage = usePlaylistStore(store => store.setPage)
    const setDefaultImg = usePlaylistStore(store => store.setDefaultImg)

    const handleClick = (img: string) => {
        setLoginModal(true)
        setDefaultImg(img)
    }

    const handleAccess = (ob: Item) => {
       setProps(ob)
       setPage('playlist')
    }

    return (
        <>
            {
                limit ? (
                    arr[0]?.slice(0,5).map((ob: Item) => {
                        return (
                            <>
                                <div className="relative group h-full min-w-[180px] md:min-w-0" key={ob?.id}>
                                    <div onClick={() => { handleAccess(ob) }} className="flex flex-col justify-between w-full p-2 h-full hover:cursor-pointer rounded-lg hover:bg-overHighGray bg-overBlack2">
                                        <div className="p-2 h-40 relative">
                                            <img className="w-full rounded-lg h-full" src={ob.images[0].url} alt="" />
                                        </div>
                                        <div className="w-full p-3">
                                            <h3 className="text-white font-bold">
                                                {ob.name}
                                            </h3>
                                        </div>
                                        <div className="pl-3">
                                            <p className="text-sm text-primaryGray font-semibold">
                                                {ob.description.slice(0,30)}...
                                            </p>
                                        </div>
                                    </div>
                                    <button onClick={() => { handleClick(ob.images[0].url) }} className="rounded-full bg-greaterGreen-600 p-0 group-hover:p-3 transition-all absolute duration-300 group-hover:bottom-[47%] bottom-24 right-6 opacity-0 hover: group-hover:opacity-100 hover:bg-greaterGreen-700">
                                        <PlayAlbumIcon />
                                    </button>
                                </div>
                            </>
                        )
                    })
                ) : (
                    arr[0]?.map((ob: Item) => {
                        return (
                            <div className="relative group h-full min-w-[180px] md:min-w-0" key={ob?.id}>
                                    <div onClick={() => { handleAccess(ob) }} className="flex flex-col justify-between w-full p-2 h-full hover:cursor-pointer rounded-lg hover:bg-overHighGray bg-overBlack2">
                                        <div className="p-2 h-40 relative">
                                            <img className="w-full rounded-lg h-full" src={ob.images[0].url} alt="" />
                                        </div>
                                        <div className="w-full p-3">
                                            <h3 className="text-white font-bold">
                                                {ob.name}
                                            </h3>
                                        </div>
                                        <div className="pl-3">
                                            <p className="text-sm text-primaryGray font-semibold">
                                                {ob.description.slice(0,30)}...
                                            </p>
                                        </div>
                                    </div>
                                    <button onClick={() => { handleClick(ob.images[0].url) }} className="rounded-full bg-greaterGreen-600 p-0 group-hover:p-3 transition-all absolute duration-300 group-hover:bottom-[47%] bottom-24 right-6 opacity-0 hover: group-hover:opacity-100 hover:bg-greaterGreen-700">
                                        <PlayAlbumIcon />
                                    </button>
                                </div>
                        )
                    })
                )
            }
        </>
    )
}