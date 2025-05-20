import React from 'react'

const Navbar = ({ onScrollTo }) => {
    return (
        <nav className="w-full bg-white sticky top-0 z-50">
            <ul className="flex justify-center gap-10 list-none py-4 cursor-pointer">
                <li className="" onClick={() => onScrollTo('home')}>Home</li>
                <li className="" onClick={() => onScrollTo('about')}>About</li>
                <li className="" onClick={() => onScrollTo('experience')}>Experience</li>
            </ul>
        </nav>
    )
}

export default Navbar
