import React from 'react'
import { useSelector } from 'react-redux'

function ErrorBox({setShowerror}) {
    const {error} = useSelector(state=>state.users)
    return (
        <div>
            <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4 backdrop-blur-xs' onClick={setShowerror(false)}>
                <div className='bg-white w-fit mx-auto rounded-xl shadow-modal py-space-md px-space-xl flex flex-col gap-4 justify-center items-center ' onClick={(e) => e.stopPropagation()}>
                    <p className='text-headline-md font-bold text-status-inactive'>Error</p>
                    <p className='text-body-lg'>{error}</p>
                    <button type="button" className='rounded-button w-full py-space-sm bg-status-inactive-bg font-semibold mt-2' onClick={setShowerror(false)}>OK</button>
                </div>
            </div>
        </div>
    )
}

export default ErrorBox