import React, {useState, useRef} from 'react'
import '../App.css';


const SearchBar = () => {

  const [searchGif, setSearchGif] = useState('')
  const [isSearchClicked, setIsSearchClicked] = useState(false)
  const searchInput = useRef(null)

  const handleSearchButton = (e) => {
    e.preventDefault()
    setSearchGif(searchInput.current.value)
    setIsSearchClicked(true)
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
