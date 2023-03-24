import React from 'react'
import Card from './Card'

function Row({title}) {
  return (
    <div>
        <h2>{title}</h2>
        <Card image={"https://www.indiewire.com/wp-content/uploads/2017/09/crouching-tiger-hidden-dragon-sword-of-destiny-2016.jpg?w=675"}/>
        
    </div>
  )
}

export default Row