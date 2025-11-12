import React from 'react'
import "./loader.css"

const Loader = () => {
    return (
        <div className='fixed top-0 left-0 z-10 bg-black/40 backdrop-blur-sm flex items-center justify-center w-full h-full'>
            <div class="orbit-spinner">
                <div class="orbit"></div>
                <div class="orbit"></div>
                <div class="orbit"></div>
            </div>
        </div>
    )
}

export default Loader
