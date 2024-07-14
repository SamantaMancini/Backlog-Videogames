import React from 'react'

function DropArea({onDrop, onDragOver, children, statusGame}) {
  return (
    <div onDragOver={onDragOver} onDrop={() => onDrop(statusGame)} className='dropzone'>{children}</div>
  )
}

export default DropArea