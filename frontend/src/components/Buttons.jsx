import React from 'react'
import { Button } from 'flowbite-react'
import { Link } from 'react-router-dom'

function Buttons({handleShow}) {

  return (
<div className='flex flex-wrap gap-3 mt-3'>
<Button pill color="gray" className='shadow-md outline-2 outline-black' onClick={() => handleShow("platforms")}>Platforms</Button>
<Button pill color="gray" className='shadow-md outline-2 outline-black' onClick={() => handleShow("genre")}>Genre</Button>
<Button pill color="gray" className='shadow-md outline-2 outline-black' onClick={() => handleShow("feautures")}>Feautures</Button>
<Link to="/add"><Button pill color="gray" className='shadow-md outline-2 outline-black'>+</Button></Link>
</div>
  )
}

export default Buttons


