import { TextInput } from "flowbite-react";

import React from 'react'

function InputForm({onSubmit, onChange, name, description, feautures, genre, platform, state}) {
  return (
    <form className="mt-5" onSubmit={onSubmit}>
    <label className="mt-5">Name: </label>
        <TextInput onChange={onChange} value={name} name="name" />
    <label className="mt-5">Description: </label>
        <TextInput onChange={onChange} value={description} name="description" />
    <label>Feautures: </label>
        <TextInput onChange={onChange} value={feautures} name="feautures" />
    <label>Genre: </label>
        <TextInput onChange={onChange} value={genre} name="genre" />
    <label>Platform: </label>
        <TextInput onChange={onChange} value={platform} name="platform" />
    <label>State: </label>
        <TextInput onChange={onChange} value={state} name="state" />
    </form>
  )
}

export default InputForm