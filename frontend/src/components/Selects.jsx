import React from 'react'
import { Button, Select } from 'flowbite-react'
import { Link } from 'react-router-dom'

function Selects({onChange}) {

  return (
<div className='flex flex-wrap gap-3 mt-3'>
    <Select name="platform" onChange={onChange}>
        <option value={""}>All platforms</option>
        <option value={"PC"}>PC</option>
        <option value={"PS5"}>PS5</option>
        <option value={"PS4"}>PS4</option>
        <option value={"Nintendo Switch"}>Nintendo Switch</option>
        <option value={"XBOX 360"}>XBOX 360</option>
        <option value={"Altro"}>Altro</option>
    </Select>
    <Select name="genre" onChange={onChange}>
        <option value={""}>All genres</option>
        <option value={"Adventure"}>Adventure</option>
        <option value={"Action"}>Action</option>
        <option value={"RPG"}>RPG</option>
        <option value={"Platform"}>Platform</option>
        <option value={"Cyberpunk"}>Cyberpunk</option>
        <option value={"Horror"}>Horror</option>
        <option value={"Sci-fi"}>Sci-fi</option>
        <option value={"Altro"}>Altro</option>
    </Select>
    <Select name="feautures" onChange={onChange}>
        <option value={""}>All Feautures</option>
        <option value={"Single-Player"}>Single-Player</option>
        <option value={"Multi-Player"}>Multi-Player</option>
        <option value={"Co-Op"}>Co-Op</option>
        <option value={"Moba"}>Moba</option>
        <option value={"Altro"}>Altro</option>
    </Select>
    <Link to="/add"><Button pill color="gray" className='shadow-md outline-2 outline-black'>+</Button></Link>
</div>
  )
}

export default Selects


