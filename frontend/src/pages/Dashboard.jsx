import React from 'react'
import { useState } from 'react'
import { useFetchGames } from '../hooks/getAllGames';
import { useEditGames } from '../hooks/editGame';
import { deleteGame } from '../hooks/deleteGame';
import Searchbar from '../components/Searchbar';
import { useParams } from 'react-router-dom';
import Navigation from '../components/Navigation';
import { Pagination } from 'flowbite-react'
import Selects from '../components/Selects';
import AdvanceSearch from '../components/AdvanceSearch';


const Dashboard = () => {
    const [searchInput, setSearchInput] = useState("");
    const { games, totalPages, handlePageChange, currentPage } = useFetchGames(searchInput)
    const [activeCard, setActiveCard] = useState(null);
    const [popUp, setPopUp] = useState(false);
    const [statusGame, setStatusGame] = useState(null)
    const { id } = useParams
    
    

    const handleSearch = (searchValue) => {
      let new_value = Object.assign({}, searchInput, {"name":searchValue})
      setSearchInput(new_value)
    }

    const handleStatus = (status) => {
      let new_value = Object.assign({}, searchInput, {"state": status})
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

    const editStatus = async () => {
      try {
          setStatusGame()
            await useEditGames(id, statusGame)  
      } catch (error) {
          alert(error)
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
        setActiveCard={setActiveCard}
        onChange={handleStatus}
        name='state'
      />
      <div>{currentPage}/{totalPages}</div>
      <Pagination 
        layout="navigation" 
        onPageChange={handlePageChange} 
        totalPages={totalPages} 
        currentPage={currentPage}
        showIcons
        />
      <h1>ActiveCard: {activeCard}</h1>
    </div>
  )
}

export default Dashboard
