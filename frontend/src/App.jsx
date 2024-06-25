import { useState } from 'react'
import { useFetchGames } from './hooks/getAllGames'
import Searchbar from './components/Searchbar'

function App() {
 const [searchInput, setSearchInput] = useState("");
 const { games } = useFetchGames(searchInput)
 
 const handleSearch = (searchValue) => {
    setSearchInput(searchValue)
  
 }

  return (
    <>
      <Searchbar onChange={(e) => handleSearch(e.target.value)} value={searchInput}/>
      {games.map((game, index) => (
        <div key={index}>
        <p>title: {game.name}</p> 
        <p>description: {game.description}</p> 
        <p>features: {game.features}</p>
        <p>genre: {game.genre}</p>
        <p>platform: {game.platform}</p>
        <p>state: {game.state}</p>
        </div>
      ))}
    </>
  )
}

export default App
