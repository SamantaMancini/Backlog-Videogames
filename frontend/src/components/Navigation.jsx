import { Tabs } from 'flowbite-react'
import CardComponent from './Card'

import React from 'react'

function changeActiveTab(tab, callback) {
  let lists = ["Backlog", "Playing", "Completed", "Retired"]
  callback(lists[tab])
}



function Navigation({
  onclick, 
  open, 
  close, 
  pop, 
  setActiveCard, 
  name, 
  onChange, 
  games,
}) {
  
  return (
    <div className="overflow-x-auto mt-5">
      <Tabs aria-label="Full width tabs" variant="fullWidth" onActiveTabChange={(tab) => changeActiveTab(tab, onChange)}>
        <Tabs.Item active title="Backlog"
         name={name}
        >
          <div className='overflow-y-auto h-[10h] flex flex-col justify-center items-center 2xl:flex'>
            {games.filter((game) => game.state.includes("Backlog")).map(game => 
            (<CardComponent key={game._id} 
              game={game}
              open={open}
              close={close}
              pop={pop}
              onclick={onclick}
              setActiveCard={setActiveCard}
            />
            ))}
          </div>
        </Tabs.Item>
        <Tabs.Item title="Playing"
          name={name}
        >
          <div className='overflow-y-auto h-[10h] flex flex-col justify-center items-center 2xl:flex'>
          {games.filter((game) => game.state.includes("Playing")).map(game => 
            (<CardComponent key={game._id} 
              game={game}
              open={open}
              close={close}
              pop={pop}
              onclick={onclick}
              setActiveCard={setActiveCard}
            />
            ))}
          </div>
        </Tabs.Item>
        <Tabs.Item title="Completed"
          name={name}
        >
        <div className='overflow-y-auto h-[10h] flex flex-col justify-center items-center 2xl:flex'>
          {games.filter((game) => game.state.includes("Completed")).map(game => 
            (<CardComponent key={game._id} 
              game={game}
              open={open}
              close={close}
              pop={pop}
              onclick={onclick}
              setActiveCard={setActiveCard}
            />
            ))}
          </div>
        </Tabs.Item>
        <Tabs.Item title="Retired"
          name={name}
        >
        <div className='overflow-y-auto h-[10h] flex flex-col justify-center items-center 2xl:flex'>
        {games.filter((game) => game.state.includes("Retired")).map(game => 
            (<CardComponent key={game._id} 
              game={game}
              open={open}
              close={close}
              pop={pop}
              onclick={onclick}
              setActiveCard={setActiveCard}
            />
            ))}
          </div>
        </Tabs.Item>
      </Tabs>
    </div>
  )
}

export default Navigation