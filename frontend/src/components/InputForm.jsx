import { TextInput, Button, Select, Label } from "flowbite-react";
import { Link } from "react-router-dom"

import React from 'react'

function InputForm({onSubmit, onClick, onChange, name, description, feautures, genre, platform, state}) {
  return (
    <>
    <form className="mt-5" onSubmit={onSubmit}>
    <Label htmlFor="name" className="mt-5" value="Name:"/>
        <TextInput id="name" onChange={onChange} value={name} name="name" required />
    <Label htmlFor="description" className="mt-5" value="Description:"/>
        <TextInput id="description" onChange={onChange} value={description} name="description" required />
    <Label htmlFor="feautures" value="Feautures:"/>
        <Select id="feautures" onChange={onChange} value={feautures} name="feautures" required>
        <option value={""}></option>
        <option>Single-Player</option>
        <option>Multi-Player</option>
        <option>Co-Op</option>
        <option>Moba</option>
        <option>Altro</option>
        </Select>
    <Label htmlFor="genre" value="Genre:" />
        <Select id="genre" onChange={onChange} value={genre} name="genre">
        <option value={""}></option>
        <option>Adventure</option>
        <option>Action</option>
        <option>RPG</option>
        <option>Platform</option>
        <option>Cyberpunk</option>
        <option>Horror</option>
        <option>Sci-fi</option>
        <option>Altro</option>
        </Select>
    <Label htmlFor="platform" value="Platform:" />
        <Select id="platform" onChange={onChange} value={platform} name="platform">
        <option value={""}></option>
        <option>PC</option>
        <option>PS5</option>
        <option>PS4</option>
        <option>Nintendo Switch</option>
        <option>XBOX 360</option>
        <option>Altro</option>
        </Select>
    <Label htmlFor="state" value="State:" />
        <Select id="state" onChange={onChange} value={state} name="state">
        <option value={""}></option>
        <option>Backlog</option>
        <option>Playing</option>
        <option>Completed</option>
        <option>Retired</option>
        </Select>
    </form>
    <div className="flex gap-5 mt-10">
        <Button type="submit" color="gray" onClick={onClick}>SAVE</Button>
        <Link to={"/"}><Button color="gray">CANCEL</Button></Link>
    </div>
    </>
  )
}

export default InputForm