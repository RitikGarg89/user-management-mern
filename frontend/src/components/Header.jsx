import React from 'react'

function Header() {
    return (
        <div className='py-5'>
            <h1 className='text-on-surface m-0 md:text-headline-xl font-bold text-headline-xl-mobile'>User Management</h1>
            <p className='text-on-surface-variant text-body-lg '>Manage and monitor all registered users across the cluster environment.</p>
        </div>
    )
}

export default Header