'use client'

import {useRouter} from "next/navigation";

export const RevalidateButton = () => {
    const router = useRouter()

    return <div className={'mt-8'}>
        <p>update router cache after returning back:</p>
        <button className={'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'}
                onClick={() => router.refresh()}>hit that thing
        </button>
    </div>
}
