import React from 'react';
import { BsSearch } from 'react-icons/bs'

const Header = ({ query, setQuery }) => {
    console.log(query)
    return (
        <div className='header'>
            <div className='header-icon'>
                <h3>React Data Table</h3>
            </div>
            <div className='search-bar'>
                <input 
                    type='search'
                    onChange={(e)=>setQuery(e.target.value)}
                    value={query}
                />
                <BsSearch className='search-icon' />
            </div>
        </div>
    )
}

export default Header
