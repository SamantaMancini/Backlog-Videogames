import React from 'react'
import { useState } from 'react'
import { useFetchGames } from '../hooks/getAllGames';
import { deleteGame } from '../hooks/deleteGame';
import Searchbar from '../components/Searchbar';
import Navigation from '../components/Navigation';
import { Pagination } from 'flowbite-react'
import Buttons from '../components/Buttons';
import AdvanceSearch from '../components/AdvanceSearch';


const Dashboard = () => {
  const [searchInput, setSearchInput] = useState("");
  const { games, totalPages, handlePageChange, currentPage, setGames } = useFetchGames(searchInput)
  const [popUp, setPopUp] = useState(false);
  const [draggedItem, setDraggedItem] = useState(null);
  const [statusGame, setStatusGame] = useState("Completed")


  const handleSearch = (searchValue) => {
    let new_value = Object.assign({}, searchInput, { "name": searchValue })
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

  const onDrop = (status, position) => {
    console.log(`${activeCard} is going to place into ${status} and at the position ${position}`)
  }

  const handleDragOver = (event) => {
    event.preventDefault(); // Prevent default behavior
  };

  const handleDrop = (target) => {
    console.log("L'id della card", draggedItem, "lo stato della card è:", statusGame);

    // Calculate the updated game state based on the dropped item and current state
    // setStatusGame(target);
    console.log("target:", target);
    useEditGames(draggedItem, {"state":statusGame});
    setSearchInput(Object.assign({}, searchInput))
  };
  return (
    <div className='flex flex-col justify-center items-center'>
      <h1 className='text-2xl mt-2 font-bold'>Backlog Videogames</h1>
      <Searchbar onChange={(e) => handleSearch(e.target.value)} />
      <AdvanceSearch games={games} searchInput={searchInput} />
      <Selects onChange={handleFilterChange} />
      <Navigation
        games={games}
        onclick={handleDelete}
        open={() => setPopUp(true)}
        close={() => setPopUp(false)}
        pop={popUp}
        setActiveCard={setActiveCard}
        handleShow={handleShow}
        onChange={handleStatus}
        name='state'
        value={'Backlog'}
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
