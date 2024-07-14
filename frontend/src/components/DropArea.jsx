import React from 'react'

function DropArea({onDrop, onDragOver, children, targetState}) {
  return (
    <div onDragOver={onDragOver} onDrop={(event) => onDrop(event, targetState)} className='dropzone'>{children}</div>
  )
}

export default DropArea