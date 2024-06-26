import { TextInput, Button } from "flowbite-react";

import React from 'react'

function InputForm({onClick, onSubmit, onChange, name, description}) {
  return (
    <form className="mt-5" onSubmit={onSubmit}>
    <label className="mt-5">Name: </label>
        <TextInput onChange={onChange} value={name} name="name"/>
    <label className="mt-5">Description: </label>
        <TextInput onChange={onChange} value={description} name="description"/>
    <label>Feautures: </label>
        <TextInput />
    <label>Genre: </label>
        <TextInput />
    <label>Platform: </label>
        <TextInput />
    <label>State: </label>
        <TextInput />
   <div className="flex gap-5 mt-10">
    <Button type="submit" color="gray" onClick={onClick}>SAVE</Button>
    <Button color="gray" onClick={onClick}>CANCEL</Button>
    </div> 
    </form>
  )
}

export default InputForm