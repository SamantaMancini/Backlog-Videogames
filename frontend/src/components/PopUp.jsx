import React from 'react'
import { Button } from 'flowbite-react'


function PopUp({onClick, close}) {
  return (
    <div className='bg-white p-4 absolute'>
    <p>Are you sure to delete it?</p>
    <div className='flex flex-wrap gap-2'>
        <Button color="gray" onClick={onClick}>YES</Button>
        <Button color="gray" onClick={close}>NO</Button>
    </div>
    </div>
  )
}

export default PopUp