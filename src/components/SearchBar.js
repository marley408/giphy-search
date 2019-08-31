import React, {useState, useRef} from 'react'
import '../App.css';


const SearchBar = ({setResults}) => {

  const searchInput = useRef(null)

  const handleSearchButton = async (e) => {
    if(searchInput.current.value === ''){
      return;
    }
    e.preventDefault()

    const res = await fetch(`http://api.giphy.com/v1/gifs/search?q=${searchInput.current.value}&api_key=qKA0xNCx1jDl9sK7kz6UObcKKTCBRk3y&limit=30`)
    const data = await res.json()
    setResults(data.data)
    searchInput.current.value = ''
  }

  return (
    <div>
      <form className='search-form' onSubmit={handleSearchButton}>
        <input ref={searchInput} className='search-bar' type='search' placeholder='Search for a gif' />
        <button type='submit' className='search-button'><i className="fas fa-search"></i></button>
      </form>
    </div>
  )
}

export default SearchBar
