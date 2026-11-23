import React from 'react'

function StatusCard({ title, value, icon, iconBg, iconColor }) {
    return (
        <div className='p-space-lg flex justify-between bg-white rounded-card'>
            <div className='flex flex-col '>
                <p className='text-text-muted text-body-lg font-sans font-semibold'>{title}</p>
                <p className='text-text text-headline-lg font-bold'>{value}</p>
            </div>
            <div
                style={{
                    backgroundColor: iconBg,
                    color: iconColor
                }}
                className='h-10 aspect-square flex justify-center items-center rounded-card'>
                {icon}
            </div>
        </div >
    )
}

export default StatusCard