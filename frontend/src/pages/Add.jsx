import React from 'react'
import InputForm from '../components/InputForm'
import { useState } from 'react'
import { useEditGames } from '../hooks/editGame'


const Add = () => {
    const [inputFile, setInputFile] = useState({
        name: "",
        description: "",
        features: "",
        genre: "",
        platform: "",
        state: ""
    })
    const handleChange = (e) => {
        setInputFile({...inputFile, [e.target.name]: e.target.value})   
    }

    const onSubmit = (e) => {
        if (!inputFile) {
            e.preventDefault()
        }
    }

    const onEdit = () => {
       setInputFile({
        name: inputFile.name,
        description: inputFile.description,
        features: inputFile.features,
        genre: inputFile.genre,
        platform: inputFile.platform,
        state: inputFile.state
       })
       useEditGames(inputFile)
    }
    
    return (
        <div className='flex flex-col justify-center items-center'>
            <h1>Add/edit</h1>
            <InputForm onChange={handleChange} onSubmit={onSubmit} onClick={() => onEdit(id)} name={inputFile.name} description={inputFile.description}/>
        </div>
  )
}

export default Add