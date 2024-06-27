import React from 'react'
import { Button } from 'flowbite-react'
import { Card } from "flowbite-react";
import { Link } from 'react-router-dom';
import PopUp from './PopUp';

function CardComponent({games, open, onclick, close, pop}) {
  
  
  return (
    <div className='flex flex-wrap gap-5'>
        {games.map((game) => (
        <Card className="max-w-sm mt-3" key={game._id}>
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{game.name}</h2> 
        <p className="font-normal text-gray-700 dark:text-gray-400">description: {game.description}</p> 
        <p className="font-normal text-gray-700 dark:text-gray-400">features: {game.feautures}</p>
        <p className="font-normal text-gray-700 dark:text-gray-400">genre: {game.genre}</p>
        <p className="font-normal text-gray-700 dark:text-gray-400">platform: {game.platform}</p>
        <p className="font-normal text-gray-700 dark:text-gray-400">state: {game.state}</p>
        { pop &&
        <PopUp onClick={() => onclick(game._id)} close={close} />
    }
        <div className='flex flex-wrap gap-2'>
        <Link to={`${game._id}`}><Button outline gradientDuoTone="greenToBlue">
        E
      </Button>
      </Link> 
     <Button outline gradientDuoTone="redToYellow" onClick={open}>
        X
      </Button>
      </div>
        </Card>
      ))}

    </div>
  )
}

export default CardComponent