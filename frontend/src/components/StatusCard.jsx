import React from 'react'

function StatusCard() {
    return (
        <div className='p-4 rounded-xl bg-surface-container-lowest border border-outline shadow-card transition-all duration-100 flex-col flex gap-space-md'>
            <div className='flex justify-between items-center'>
                <p className='text-body-lg text-on-surface'>TOTAL USERS</p>
                <div className='h-7 w-7 rounded-button bg-primary-container border-outline'>

                </div>
            </div>
            <div className='flex items-baseline'>
                <p className='text-headline-lg font-bold pr-space-sm'>1284</p>
                <p className='text-label-lg'>registered</p>
            </div>
        </div>
    )
}

export default StatusCard