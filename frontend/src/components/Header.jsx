import React from 'react'

function Header() {
    return (
        <div className='py-4 sm:py-6'>
            <h1 className='text-on-surface m-0 text-2xl sm:text-3xl md:text-headline-xl font-bold'>
                User Management
            </h1>
            <p className='text-on-surface-variant text-sm sm:text-base mt-1'>
                Manage and monitor all registered users across the cluster environment.
            </p>
        </div>
    )
}

export default Header