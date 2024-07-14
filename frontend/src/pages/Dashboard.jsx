import React from 'react'
import { useState } from 'react'
import { useFetchGames } from '../hooks/getAllGames';
import { useEditGames } from '../hooks/editGame';
import { deleteGame } from '../hooks/deleteGame';
import Searchbar from '../components/Searchbar';
import Navigation from '../components/Navigation';
import { Pagination } from 'flowbite-react'
import Selects from '../components/Selects';
import AdvanceSearch from '../components/AdvanceSearch';
import DropArea from '../components/DropArea';




const Dashboard = () => {
    const [searchInput, setSearchInput] = useState("");
    const { games, totalPages, handlePageChange, currentPage, setGames } = useFetchGames(searchInput)
    const [popUp, setPopUp] = useState(false);
    const [draggedItem, setDraggedItem] = useState(null);
    
    

    const handleSearch = (searchValue) => {
      let new_value = Object.assign({}, searchInput, {"name":searchValue})
      setSearchInput(new_value)
    }

    
    const handleDelete = async (id) => {
      try {
        await deleteGame(id)
      } catch (error) {
        console.log(error)
      } finally {
        setPopUp(false)
      }
    }


  const handleFilterChange = (event) => {
    const selectedValue = event.target.value;
    const selectedField = event.target.name;
    let filter = {}
    if (selectedValue) {
      filter[selectedField] = selectedValue
    }
    else {
      delete searchInput[selectedField]
    }

    let new_value = Object.assign({}, searchInput, filter)
    setSearchInput(new_value)
  };

  const handleDragStart = (event) => {
    setDraggedItem(event.target.getAttribute("data-id"));
    console.log("card", draggedItem)
  };

  const handleDragOver = (event) => {
    event.preventDefault(); // Prevent default behavior
  };
  
  const handleDrop = async (targetState) => {
    let json = draggedItem.dataTransfer('text/plain')
      try {
        // Update game state using onEditGame function
        const updateGame = await useEditGames(json, targetState); // Replace with your actual function call
        setDraggedItem(updateGame)
        console.log('Game state updated:', json, targetState);
      } catch (error) {
        console.error('Error updating game state:', error);
      } finally {
        setDraggedItem(null); // Reset dragged card state
      }
  }
  return (
    <div className='flex flex-col justify-center items-center'>
      <h1 className='text-2xl mt-2 font-bold'>Backlog Videogames</h1>
      <Searchbar onChange={(e) => handleSearch(e.target.value)} />
      <AdvanceSearch games={games} searchInput={searchInput}/>
      <Selects onChange={handleFilterChange} />
      <Navigation 
        games={games}  
        onclick={handleDelete}
        open={() => setPopUp(true)}
        close={() => setPopUp(false)}
        pop={popUp}
        onDragStart={handleDragStart}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      />
      <div>{currentPage}/{totalPages}</div>
      <Pagination 
        layout="navigation" 
        onPageChange={handlePageChange} 
        totalPages={totalPages} 
        currentPage={currentPage}
        showIcons
        />
    </div>
  )
}

export default Dashboard
