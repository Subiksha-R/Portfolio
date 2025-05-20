import React from 'react'

const Navbar = ({ onScrollTo }) => {
    return (
        <div className="w-full bg-[#130428] text-white sticky top-0 z-50">
            <ul className="flex justify-center gap-15 list-none py-4 cursor-pointer">
                <li className="" onClick={() => onScrollTo('home')}>Home</li>
                <li className="" onClick={() => onScrollTo('about')}>About</li>
                <li className="" onClick={() => onScrollTo('experience')}>Experience</li>
            </ul>
        </div>
    )
}

export default Navbar
