import React from 'react'
import { TextInput } from 'flowbite-react'

function Searchbar({onChange, value}) {
  return (
    <div className='mt-5 lg:container w-[80%] rounded-2xl shadow-md outline-5 outline-black'>
        <TextInput onChange={onChange} value={value} />
    </div>
  )
}

export default Searchbar