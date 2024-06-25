import { useState } from 'react'
import { useFetchGames } from './hooks/getAllGames'
import Searchbar from './components/Searchbar'

function App() {
 const { games } = useFetchGames()
 const [filteredResults, setFilteredResults] = useState([]);
 const [searchInput, setSearchInput] = useState("");
 
 const handleSearch = (searchValue) => {
  setSearchInput(searchValue)
if (searchInput !== "") {
    const filteredGame = games.filter((game) => {
      return Object.values(game).join('').includes(searchInput)
    })
    setFilteredResults(filteredGame)
} else {
  setFilteredResults(games)
}
} 
 
  return (
    <>
      <Searchbar onChange={(e) => handleSearch(e.target.value)} />
      {searchInput.length > 1 ? (
        filteredResults.map((game, index) => {
        return (
          <div key={index}>
            {game.name}
          </div>
        )
      })
    ) : (
      games.map((game, index) => {
        return (
          <div key={index}>
            {game.name}
          </div>
        )
      })
    )}

    </>
  )
}

export default App
