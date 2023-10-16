import { useButtonsStore } from "../../store/useButtonsStore"

export const ArtistCard = (artists: {})  => {
    
    const filter = useButtonsStore(store => store.selectedFilter)

    return (
        <>
            {
            filter === 'artists'
            ? (
                artists?.artists?.items?.map((ob) => {
                    return (
                        <div className="relative group min-h-[270px] pb-4 min-w-[175px] max-w-[175px]" key={ob?.id}>
                            <div className="flex flex-col w-full p-2 h-full hover:cursor-pointer rounded-lg hover:bg-overHighGray bg-overBlack2">
                                <div className="p-2 h-40 relative">
                                    <img className="w-full rounded-full h-full" src={ob?.images[0]?.url} alt="" />
                                </div>
                                <div>
                                    <div className="w-full pl-3 pt-4">
                                        <h3 className="text-white font-bold">
                                            {ob?.name}
                                        </h3>
                                    </div>
                                    <div className="pl-3">
                                        <p className="text-sm capitalize text-primaryGray font-semibold">
                                            {ob?.type}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            ) : (
                artists?.artists?.items?.slice(0,7)?.map((ob) => {
                    return (
                        <div className="relative group min-h-[300px] pb-4 min-w-[175px] max-w-[175px]" key={ob?.id}>
                            <div className="flex flex-col w-full p-2 h-full hover:cursor-pointer rounded-lg hover:bg-overHighGray bg-overBlack2">
                                <div className="p-2 h-40 relative">
                                    <img className="w-full rounded-full h-full" src={ob?.images[0]?.url} alt="" />
                                </div>
                                <div>
                                    <div className="w-full pl-3 pt-4">
                                        <h3 className="text-white font-bold">
                                            {ob?.name}
                                        </h3>
                                    </div>
                                    <div className="pl-3">
                                        <p className="text-sm capitalize text-primaryGray font-semibold">
                                            {ob?.type}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            )
        }
        </>
    )
}