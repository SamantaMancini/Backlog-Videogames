import { Tabs } from 'flowbite-react'
import CardComponent from './Card'
import Buttons from './Buttons'

import React from 'react'

function Navigation({value, games, filteredGames, onclick, open, close, pop, setActiveCard, handleShow, name, onChange }) {
  return (
<div className="overflow-x-auto mt-5">
      <Tabs aria-label="Full width tabs" variant="fullWidth">
        <Tabs.Item active title="Backlog"
         name={name}
         onChange={onChange}
         value={value}
         >
      {filteredGames.length > 0 ?
      filteredGames.map((game) => (
      <CardComponent key={game._id}
       game={game} 
        open={open} 
        onclick={onclick} 
        close={close} 
        pop={pop} 
        setActiveCard={setActiveCard}
      />
    )) : (games.map((game) => (
      <CardComponent key={game._id}
       game={game} 
        open={open} 
        onclick={onclick} 
        close={close} 
        pop={pop} 
        setActiveCard={setActiveCard}
      />
    )))}
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
      <Buttons handleShow={handleShow}/>
    </div>
  )
}

export default Navigation