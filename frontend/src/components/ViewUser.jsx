import React from 'react'

function ViewUser() {
    return (
        <div
            className='fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4 backdrop-blur-xs'
            onClick={() => setActiveUserForm(false)}
        >
            <div
                className='bg-white w-full max-w-[540px] mx-auto rounded-xl shadow-modal'
                onClick={(e) => e.stopPropagation()}
            >

            </div>
        </div>
    )
}

export default ViewUser