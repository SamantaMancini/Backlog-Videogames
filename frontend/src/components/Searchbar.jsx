import React from 'react'

function Searchbar({onChange}) {
  return (
    <div>
        <input type='search' placeholder='Search name' onChange={onChange} />
    </div>
  )
}

export default Searchbar