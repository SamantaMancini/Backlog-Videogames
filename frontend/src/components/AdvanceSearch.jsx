import React from 'react'

function AdvanceSearch({games, searchInput}) {
  return (
    <div className='bg-white text-black w-full text-left flex flex-col justify-center items-center'>
    {games.filter(game => {
        const searchTerm = searchInput;
        const fullName = game.name;
        return searchTerm && fullName.startsWith(searchTerm)
    }).map((game) => (
        <div key={game._id}>
            {game.name}
        </div>
    ))}
    </div>
  )
}

export default AdvanceSearch