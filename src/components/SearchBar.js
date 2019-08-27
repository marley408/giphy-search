import React from 'react'
import '../App.css';


const SearchBar = () => {
  return (
    <div>
      <form className='search-form'>
        <input className='search-bar' type='search' placeholder='Search for a gif' />
        <button className='search-button'><i className="fas fa-search"></i></button>
      </form>
    </div>
  )
}

export default SearchBar
