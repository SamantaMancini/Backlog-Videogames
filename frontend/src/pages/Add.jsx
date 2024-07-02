import React from 'react'
import InputForm from '../components/InputForm'
import { Button } from 'flowbite-react'
import { useState } from 'react'
import { useCreateGames } from '../hooks/createGame'
import { Link } from 'react-router-dom'

const Add = () => {
    const [error, setError] = useState(null);
   
    const [inputFile, setInputFile] = useState({
        name: "",
        description: "",
        feautures: "",
        genre: "",
        platform: "",
        state: ""
    })
    
    
    const handleChange = (e) => {
        setInputFile({...inputFile, [e.target.name]: e.target.value})   
    }

    const createGame = async () => {
        try {
            setInputFile({
                name: inputFile.name,
                description: inputFile.description,
                feautures: inputFile.feautures,
                genre: inputFile.genre,
                platform: inputFile.platform,
                state: inputFile.state
              })
              await useCreateGames(inputFile)       
        } catch (error) {
            setError(error)
    }
}
    const onSubmit = (e) => {
        if (!inputFile) {
            e.preventDefault()
        }
    }
    
    return (
        <div className='flex flex-col justify-center items-center'>
            <h1>Add</h1>
            <InputForm onChange={handleChange} onSubmit={onSubmit} 
            name={inputFile.name} 
            description={inputFile.description}
            feautures={inputFile.feautures}
            genre={inputFile.genre}
            platform={inputFile.platform}
            state={inputFile.state}
            />
            <div className="flex gap-5 mt-10">
            <Button type="submit" color="gray" onClick={createGame}>SAVE</Button>
            <Link to={"/"}><Button color="gray">CANCEL</Button></Link>
            {error &&
            <h2>Errore: {error}</h2>}
            </div> 
        </div>
  )
}

export default Add