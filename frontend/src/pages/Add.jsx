import React from 'react'
import InputForm from '../components/InputForm'
import { Button } from 'flowbite-react'
import { useState } from 'react'
import { useEditGames } from '../hooks/editGame'
import { useParams } from 'react-router-dom'
import { useCreateGames } from '../hooks/createGame'
import { Link } from 'react-router-dom'

const Add = () => {
   
    const [inputFile, setInputFile] = useState({
        name: "",
        description: "",
        feautures: "",
        genre: "",
        platform: "",
        state: ""
    })

    const location = useParams()
    console.log(location.id)
    
    const handleChange = (e) => {
        setInputFile({...inputFile, [e.target.name]: e.target.value})   
    }

    const postGame = async () => {
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
            console.log(error)
        } finally {
            alert("Gioco creato")
        }

    }
    const onSubmit = (e) => {
        if (!inputFile) {
            e.preventDefault()
        }
    }

    const editGame = async () => {
        try {
            setInputFile({
                name: inputFile.name,
                description: inputFile.description,
                feautures: inputFile.feautures,
                genre: inputFile.genre,
                platform: inputFile.platform,
                state: inputFile.state
              })
              await useEditGames(location.id)  
        } catch (error) {
            console.log(error)
        } finally {
            alert("Gioco editato")
        }
    }
    
    return (
        <div className='flex flex-col justify-center items-center'>
            <h1>Add/edit</h1>
            <InputForm onChange={handleChange} onSubmit={onSubmit} 
            name={inputFile.name} 
            description={inputFile.description}
            feautures={inputFile.feautures}
            genre={inputFile.genre}
            platform={inputFile.platform}
            state={inputFile.state}
            />
            <div className="flex gap-5 mt-10">
            <Button type="submit" color="gray" onClick={editGame}>SAVE</Button>
            <Link to={"/"}><Button color="gray">CANCEL</Button></Link>
            </div> 
        </div>
  )
}

export default Add