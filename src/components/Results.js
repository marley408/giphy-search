import React, {useEffect, useState} from 'react'

const Results = () => {

  const [trendingGifs, setTrendingGifs] = useState([])
  console.log(trendingGifs)


  useEffect(() => {
    const fetchTrendingGifs = async () => {
      const res = await fetch('https://api.giphy.com/v1/gifs/trending?api_key=qKA0xNCx1jDl9sK7kz6UObcKKTCBRk3y&limit=30&rating=G')
      const data = await res.json();
      console.log(data)
      
      setTrendingGifs(data.data)
    }

    fetchTrendingGifs()
  }, [])

  return (
    <div className='results-container' >
      {trendingGifs.map(gif =>{
        return(
        <div className='gif' key={gif.id}>
          <img alt='gif' src={gif.images.fixed_height.url} />
        </div>
        )
      })}
    </div>
  )
}

export default Results
