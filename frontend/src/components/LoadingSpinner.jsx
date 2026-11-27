import React from 'react'

function LoadingSpinner() {
  return (
    <div className='flex justify-center items-center'>
        <div className='h-10 w-10 rounded-full border-4 border-surface-high border-t-primary-hover animate-spin'></div>
    </div>
  )
}

export default LoadingSpinner