import React from 'react'
import InputForm from '../components/InputForm'
import { useState, useEffect } from 'react'
import { useEditGames } from '../hooks/editGame'
import { useParams } from 'react-router-dom'
import { useFetchGames } from '../hooks/getAllGames';
import { useNavigate } from 'react-router-dom'

const Edit = () => {
    const { id } = useParams()
    const { games } = useFetchGames()
    const navigate = useNavigate()
    const [inputFile, setInputFile] = useState(null)
 
    console.log(inputFile)

    useEffect(() => {
        if (games.length > 0) {
            const foundGame = games.find((game) => game._id === id)
            setInputFile(foundGame);
        }
      }, [games]);

    
    const handleChange = (e) => {
        setInputFile({...inputFile, [e.target.name]: e.target.value}) 
    }


    const onSubmit = (e) => {
        if (!inputFile) {
            e.preventDefault()
        }
    }

    const editGame = async () => {
        try {
            setInputFile()
              await useEditGames(id, inputFile)  
        } catch (error) {
            alert(error)
        } finally {
            alert("Game Edited!")
            navigate("/")
        }
    }
    
    return (
        <div className='flex flex-col justify-center items-center'>
            <h1>Edit</h1>
            {inputFile && (
                <InputForm 
                    onChange={handleChange} 
                    onSubmit={onSubmit} 
                    name={inputFile.name} 
                    description={inputFile.description}
                    feautures={inputFile.feautures}
                    genre={inputFile.genre}
                    platform={inputFile.platform}
                    state={inputFile.state}
                    onClick={editGame}
                />
            )}
        </div>
  )
}

export default Edit