import React from 'react'

function Searchbar({onChange, value}) {
  return (
    <div>
        <input type='search' placeholder='Search name' onChange={onChange} value={value}/>
    </div>
  )
}

export default Searchbar