import { useState } from 'react'
import { useFetchGames } from './hooks/getAllGames'
import Searchbar from './components/Searchbar'

function App() {
 const [searchInput, setSearchInput] = useState("");
 const { games } = useFetchGames(searchInput)
 
 const handleSearch = (searchValue) => {
  setSearchInput(searchValue)
 }
 console.log(games[0])
  return (
    <>
      <Searchbar onChange={(e) => handleSearch(e.target.value)} value={searchInput}/>
      {games.map((game, index) => {
        <li key={index}>{game.name}</li>
      })}
    </>
  )
}

export default App
