import { Tabs } from 'flowbite-react'

import React from 'react'

function Navigation() {
  return (
<div className="overflow-x-auto mt-5">
      <Tabs aria-label="Full width tabs" variant="fullWidth">
        <Tabs.Item active title="Backlog">
        </Tabs.Item>
        <Tabs.Item title="Playing">
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