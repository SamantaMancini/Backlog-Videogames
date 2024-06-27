import React from 'react'
import { useState } from 'react'
import { useFetchGames } from '../hooks/getAllGames';
import { deleteGame } from '../hooks/deleteGame';
import Searchbar from '../components/Searchbar';
import CardComponent from '../components/Card';
import Navigation from '../components/Navigation';
import { Button } from 'flowbite-react';
import { Pagination } from 'flowbite-react';


const Dashboard = () => {
    const [searchInput, setSearchInput] = useState("");
    const [popUp, setPopUp] = useState(false);
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
  return (
    <div className='flex flex-col justify-center items-center'>
    <h1 className='text-2xl mt-2 font-bold'>Backlog Videogames</h1>
    <Searchbar onChange={(e) => handleSearch(e.target.value)} value={searchInput}/>
    <Navigation />
    <div className='flex flex-wrap gap-3 mt-3'>
    <Button pill color="gray" className='shadow-md outline-2 outline-black'>Platforms</Button>
    <Button pill color="gray" className='shadow-md outline-2 outline-black'>Genre</Button>
    <Button pill color="gray" className='shadow-md outline-2 outline-black'>Feautures</Button>
    </div>
    <CardComponent games={games} open={() => setPopUp(true)} onclick={handleDelete} pop={popUp} close={() => setPopUp(false)}/>
    <div className="flex overflow-x-auto sm:justify-center bottom-0 absolute pb-4">
    <Pagination currentPage={currentPage} totalPages={14} onPageChange={onPageChange} showIcons />
    </div>
   
    </div>
  )
}

export default Dashboard
