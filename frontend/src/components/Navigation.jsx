import { Tabs } from 'flowbite-react'
import CardComponent from './Card'


import React from 'react'

function changeActiveTab(tab, callback) {
  console.log("tab:", tab)
  console.log("tab.title:", tab.title)
  console.log("tab.value:", tab.value)
  let lists = ["Backlog", "Playing", "Completed", "Retired"]
  callback(lists[tab])
}

function Navigation({value, filteredGames, onclick, open, close, pop, setActiveCard, name, onChange, games }) {
  return (
    <div className="overflow-x-auto mt-5">
      <Tabs aria-label="Full width tabs" variant="fullWidth" onActiveTabChange={(tab) => changeActiveTab(tab, onChange)}>
        <Tabs.Item active title="Backlog"
         name={name}
         onChange={onChange}
         value={value}
        >
         
        <Tabs.Item title="Backlog">
        <DropArea onDragOver={onDragOver} onDrop={onDrop} statusGame="Backlog">
        Drop Backlog
        </DropArea>
        
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
        
        <Tabs.Item title="Playing">
        <DropArea onDragOver={onDragOver} onDrop={onDrop} statusGame="Playing">
        Drop Playing
        </DropArea>

        <div className={"state"} onDragOver={onDragOver} onDrop={onDrop}>Drop: here</div>
          <div className='overflow-y-auto h-[10h] flex flex-col justify-center items-center 2xl:flex'>
            {games.map((game) => (
              <CardComponent key={game._id}
                game={game} 
                open={open} 
                onclick={onclick} 
                close={close} 
                pop={pop} 
                setActiveCard={setActiveCard}
              />
            ))}
          </div>
        </Tabs.Item>
        <Tabs.Item title="Playing"
          name={name}
          onChange={onChange}
        >
          <div className='overflow-y-auto h-[10h] flex flex-col justify-center items-center 2xl:flex'>
            {games.map((game) => (
              <CardComponent key={game._id}
                game={game} 
                open={open} 
                onclick={onclick} 
                close={close} 
                pop={pop} 
                setActiveCard={setActiveCard}
              />
            ))}
          </div>
        </Tabs.Item>
        <Tabs.Item title="Completed">
        </Tabs.Item>
        <Tabs.Item title="Retired">
        </Tabs.Item>
      </Tabs>
    </div>
  )
}

export default Navigation