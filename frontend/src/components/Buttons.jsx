import React from 'react'
import { Button } from 'flowbite-react'

function Buttons({handleShow}) {

  return (
<div className='flex flex-wrap gap-3 mt-3'>
<Button pill color="gray" className='shadow-md outline-2 outline-black' onClick={() => handleShow("platforms")}>Platforms</Button>
<Button pill color="gray" className='shadow-md outline-2 outline-black' onClick={() => handleShow("genre")}>Genre</Button>
<Button pill color="gray" className='shadow-md outline-2 outline-black' onClick={() => handleShow("feautures")}>Feautures</Button>
</div>
  )
}

export default Buttons


