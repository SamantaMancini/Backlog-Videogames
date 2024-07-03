import React from 'react'
import InputForm from '../components/InputForm'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCreateGames } from '../hooks/createGame'


const Add = () => {
   
    const [inputFile, setInputFile] = useState({
        name: "",
        description: "",
        feautures: "",
        genre: "",
        platform: "",
        state: ""
    })

    const navigate = useNavigate()
    const handleChange = (e) => {
        setInputFile({...inputFile, [e.target.name]: e.target.value})   
    }

    const createGame =  () => {
        if (inputFile.name === "" || 
            inputFile.description === "" || 
            inputFile.feautures === "" || 
            inputFile.genre === "" || 
            inputFile.platform === "") 
            {
            alert("Please fill all the fields")
        } else {
            setInputFile({
                name: inputFile.name,
                description: inputFile.description,
                feautures: inputFile.feautures,
                genre: inputFile.genre,
                platform: inputFile.platform,
                state: inputFile.state
              })
            useCreateGames(inputFile)
            alert("Game created!")
            navigate("/") 
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
            onClick={createGame}
            />
        
        </div>
  )
}

export default Add