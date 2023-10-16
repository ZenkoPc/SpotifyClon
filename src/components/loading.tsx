import { CircularProgress } from "@mui/material"

export const Loading = () => {
    return (
        <div className="flex w-full h-full flex-col gap-6 justify-center items-center">
            <CircularProgress color="success" size={90} />
            <h3 className="text-white font-bold text-xl">
                Loading...
            </h3>
        </div>
    )
}