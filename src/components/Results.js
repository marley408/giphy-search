import React, {useEffect, useState} from 'react'

// function for rendering gifs in the gif container
const renderResults = (array) =>{
  return array.map(gif => {
    return(<div onClick={(e) => clickedGif(e, gif.images)} className='gif' key={gif.id}>
    <img alt='gif' src={gif.images.fixed_height.url} />
  </div>)
  })
}

// when gif is clicked it will be "paused" or replaced by its still image
const clickedGif = (e, { fixed_height_still, fixed_height }) => {

  const clickedGif = e.target

  clickedGif.src = clickedGif.src === fixed_height_still.url ? fixed_height.url : fixed_height_still.url

  console.log(clickedGif)

}




const Results = ({results}) => {

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
      {results.length ? renderResults(results) : renderResults(trendingGifs)}
    </div>
  )
}

export default Results
