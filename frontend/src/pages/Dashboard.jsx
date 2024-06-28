import React from 'react'
import { useState } from 'react'
import { useFetchGames } from '../hooks/getAllGames';
import { deleteGame } from '../hooks/deleteGame';
import Searchbar from '../components/Searchbar';
import CardComponent from '../components/Card';
import Navigation from '../components/Navigation';
import { Button, Checkbox } from 'flowbite-react';
import { Pagination } from 'flowbite-react';




const Dashboard = () => {
    const [searchInput, setSearchInput] = useState("");
    const [activeCard, setActiveCard] = useState(null);
    const [selectedPlatforms, setSelectedPlatforms] = useState([]);
    const [popUp, setPopUp] = useState(false);
    const [showDiv, setShowDiv] = useState(false)
    const [currentPage, setCurrentPage] = useState(1); 
    const onPageChange = (page) => setCurrentPage(page);
    const { games } = useFetchGames(searchInput)


    const handleSearch = (searchValue) => {
       setSearchInput(searchValue)  
    }


    const handleDelete = async (id) => {
      try {
        await deleteGame(id)
      } catch (error) {
        console.log(error)
      }
    }
  
  const handleShow = () => {
    setShowDiv(!showDiv)
  }

const handleChecked = (index) => {
  const isSelected = selectedPlatforms.includes(index);
  const updatedPlatform = isSelected ? 
  games.filter((platform) => { return platform !== index })
  : [...selectedPlatforms, index]

setSelectedPlatforms(updatedPlatform)
}

const filteredGames = games.filter((game) => {
  return selectedPlatforms.length === 0 || selectedPlatforms.includes(game.platform);
});
  
  const onDrop = (status, position) => {
    console.log(`${activeCard} is going to place into ${status} and at the position ${position}`)
  }
  return (
    <div className='flex flex-col justify-center items-center'>
    <h1 className='text-2xl mt-2 font-bold'>Backlog Videogames</h1>
    <Searchbar onChange={(e) => handleSearch(e.target.value)} />
    <Navigation onDrop={onDrop} games={games}/>
    <div className='flex flex-wrap gap-3 mt-3'>
    <Button pill color="gray" className='shadow-md outline-2 outline-black' onClick={handleShow}>Platforms</Button>
    <Button pill color="gray" className='shadow-md outline-2 outline-black'>Genre</Button>
    <Button pill color="gray" className='shadow-md outline-2 outline-black'>Feautures</Button>
    </div>
    {showDiv &&
    <div>
      {games.map((item) => (
        <div key={item._id}>
        <label>{item.platform}</label>
          <Checkbox
          checked={selectedPlatforms.includes(item.platform)}
          onChange={() => handleChecked(item.platform)}/>
        </div>
      ))}
    </div>
    }
<div>
    {filteredGames.map((game) => (
  <div key={game._id}>
    <CardComponent 
    game={game} 
    open={() => setPopUp(true)} 
    onclick={handleDelete} 
    pop={popUp} 
    close={() => setPopUp(false)}
    setActiveCard={setActiveCard}
    search={searchInput}
    />
    </div>
    ))}
    
    </div>
    <div className="flex overflow-x-auto sm:justify-center bottom-0 absolute pb-4">
    <Pagination currentPage={currentPage} totalPages={14} onPageChange={onPageChange} showIcons />
    </div>
   <h1>ActiveCard: {activeCard}</h1>
    </div>
  )
}

export default Dashboard
