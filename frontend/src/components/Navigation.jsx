import { Tabs } from 'flowbite-react'
import CardComponent from './Card'
import DropArea from './DropArea'

import React from 'react'

function changeActiveTab(tab, callback) {
  let lists = ["Backlog", "Playing", "Completed", "Retired"]
  callback = lists[tab]
}


function Navigation({
  onclick, 
  open, 
  close, 
  pop, 
  games,
  onDrop,
  onDragOver,
  onDragStart,
  statusGame
}) {
  return (
    <div className="overflow-x-auto mt-5">
            <DropArea onDragOver={onDragOver} onDrop={onDrop}>
        Drop
        </DropArea>
      <Tabs aria-label="Full width tabs" variant="fullWidth" 
        onActiveTabChange={(tab) => changeActiveTab(tab, onChange)}
        id="droptarget"
        onDragOver={onDragOver}
        onDrop={onDrop}
        >
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
              statusGame={statusGame}
              onclick={onclick}
              onDragStart={onDragStart}
            />
            ))}
          </div>
          
        </Tabs.Item>
        
        <Tabs.Item title="Playing"
        >
        <div className={"state"} onDragOver={onDragOver} onDrop={onDrop}>Drop: here</div>
          <div className='overflow-y-auto h-[10h] flex flex-col justify-center items-center 2xl:flex'>
          {games.filter((game) => game.state.includes("Playing")).map(game => 
            (<CardComponent key={game._id} 
              game={game}
              open={open}
              close={close}
              pop={pop}
              onclick={onclick}
              onDragStart={onDragStart}
              status={statusGame}
            />
            ))}
          </div>
        </Tabs.Item>
        <Tabs.Item title="Completed"
        >
        <div className={"state"} onDragOver={onDragOver} onDrop={onDrop}>Drop: here</div>
        <div className='overflow-y-auto h-[10h] flex flex-col justify-center items-center 2xl:flex'>
          {games.filter((game) => game.state.includes("Completed")).map(game => 
            (<CardComponent key={game._id} 
              game={game}
              open={open}
              close={close}
              pop={pop}
              onclick={onclick}
              onDragStart={onDragStart}
              status={statusGame}
            />
            ))}
          </div>
        </Tabs.Item>
        <Tabs.Item title="Retired"     
        >
        <div className={"state"} onDragOver={onDragOver} onDrop={onDrop}>Drop: here</div>
        <div className='overflow-y-auto h-[10h] flex flex-col justify-center items-center 2xl:flex'>
        {games.filter((game) => game.state.includes("Retired")).map(game => 
            (<CardComponent key={game._id} 
              game={game}
              open={open}
              close={close}
              pop={pop}
              onclick={onclick}
              onDragStart={onDragStart}
              status={statusGame}
            />
            ))}
          </div>
        </Tabs.Item>
      </Tabs>
    </div>
  )
}

export default Navigation