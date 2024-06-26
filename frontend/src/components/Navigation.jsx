import { Tabs } from 'flowbite-react'
import CardComponent from './Card'


import React from 'react'

function Navigation({value, filteredGames, onclick, open, close, pop, setActiveCard, name, onChange }) {
  return (
<div className="overflow-x-auto mt-5">
      <Tabs aria-label="Full width tabs" variant="fullWidth">
        <Tabs.Item active title="Backlog"
         name={name}
         onChange={onChange}
         value={value}
         >
      <div className='overflow-y-auto h-[10h] flex flex-col justify-center items-center 2xl:flex'>
      {filteredGames.map((game) => (
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
        />
        <Tabs.Item title="Completed">
        </Tabs.Item>
        <Tabs.Item title="Retired">
        </Tabs.Item>
      </Tabs>
    </div>
  )
}

export default Navigation