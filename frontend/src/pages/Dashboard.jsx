import React from 'react'
import { useState } from 'react'
import { useFetchGames } from '../hooks/getAllGames';
import { deleteGame } from '../hooks/deleteGame';
import Searchbar from '../components/Searchbar';
import Navigation from '../components/Navigation';
import { Pagination } from 'flowbite-react'
import Buttons from '../components/Buttons';



const Dashboard = () => {
    const [searchInput, setSearchInput] = useState("");
    const { games } = useFetchGames(searchInput)
    const [activeCard, setActiveCard] = useState(null);
    const [popUp, setPopUp] = useState(false);
    const [showDiv, setShowDiv] = useState(null)
    const [currentPage, setCurrentPage] = useState(1);
    
    
    const onPageChange = (page) => {
      setCurrentPage(page)
    }
    

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
  
  const handleShow = (id) => {
      setShowDiv(id)
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
      <Buttons handleShow={handleShow}/>

      {showDiv === "platforms" &&
        <div className='flex justify-center items-center pt-5'>
          <div className='flex gap-2 cursor-pointer' onClick={() => setShowDiv(false)}>x</div>
          <select onChange={handleFilterChange} name='platform'>
            <option value="">All</option>
            {games.map((item) => (
              <option key={item._id} value={item.platform}>{item.platform}</option>
            ))}
          </select>
        </div>
      }

      {showDiv === "genre" &&
      <div className='flex justify-start items-start pt-5'>
      <div className='flex gap-2 cursor-pointer' onClick={() => setShowDiv(false)}>x</div>
        <select onChange={handleFilterChange} name='genre'>
        <option value="">All</option>
        {games.map((item) => (
          <option key={item._id} value={item.genre}>{item.genre}</option>
        ))}
        </select>
        </div>
      }

      { showDiv === "feautures" &&
        <div className='flex justify-start items-start pt-5'>
          <div className='flex gap-2 cursor-pointer' onClick={() => setShowDiv(false)}>x</div>
          <select onChange={handleFilterChange} name='feautures'>
            <option value="">All</option>
            {games.map((item) => (
              <option key={item._id} value={item.feautures}>{item.feautures}</option>
            ))}
          </select>
        </div>
      }
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
      />
      <div>{currentPage}/14</div>
      <Pagination 
        layout="navigation" 
        onPageChange={onPageChange} 
        totalPages={14} 
        currentPage={currentPage}
        showIcons
        />
      <h1>ActiveCard: {activeCard}</h1>
    </div>
  )
}

export default Dashboard
