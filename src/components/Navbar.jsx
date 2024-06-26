import React, { useState } from 'react';

const Navbar = ({ onSearch, onSelectCategory }) => {
    const [searchQuery, setSearchQuery] = useState("");

    const handleSearch = (e) => {
        e.preventDefault();
        onSearch(searchQuery);
    };

    return (
        <div className="navbar w-full fixed bg-base-100 flex justify-between items-center p-4 md:p-3 shadow-lg z-50">
            <div className="flex items-center">
                <a className="btn btn-ghost text-xl">daisyUI</a>
            </div>
            <div className="hidden md:flex items-center">
                <ul className="menu menu-horizontal p-0">
                    <li><a onClick={() => onSelectCategory('trending')}>Trending</a></li>
                    <li><a onClick={() => onSelectCategory('icc')}>ICC Mens T20</a></li>
                    <li><a onClick={() => onSelectCategory('technical')}>Technical</a></li>
                    <li><a onClick={() => onSelectCategory('politics')}>Politics</a></li>
                </ul>
            </div>
            <div className="flex items-center gap-2">
                <div className="form-control">
                    <input 
                        type="text" 
                        placeholder="Search..." 
                        className="input input-bordered w-24 md:w-auto" 
                        value={searchQuery} 
                        onChange={(e) => setSearchQuery(e.target.value)} 
                    />
                </div>
                <button className="btn btn-neutral" onClick={handleSearch}>Search</button>
                <button className="md:hidden btn btn-square btn-ghost" onClick={() => document.getElementById('mobile-menu').classList.toggle('hidden')}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" /></svg>
                </button>
            </div>
            <div id="mobile-menu" className="md:hidden flex flex-col absolute top-16 left-0 w-full bg-base-100 shadow-lg p-4 z-50">
                <ul className="menu p-0">
                    <li><a onClick={() => onSelectCategory('trending')}>Trending</a></li>
                    <li><a onClick={() => onSelectCategory('icc')}>ICC Mens T20</a></li>
                    <li><a onClick={() => onSelectCategory('technical')}>Technical</a></li>
                    <li><a onClick={() => onSelectCategory('politics')}>Politics</a></li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;
