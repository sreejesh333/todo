import React from 'react'
import { useState } from 'react'

export const Addtodo = (props) => {
  
    const [item,setItem] = useState("")

    const handleChange = (e) =>{
        setItem(e.target.value)

    }

    const handleSubmit = (e) =>{
      e.preventDefault()
     props.item(item)

    }
  
  
  
    return (

    <form method="post" onSubmit={handleSubmit}>
        <input tupe="text" name="item" value={item} onChange={handleChange} placeholder="Enter the todo"/>
        <button type='submit'>Add</button>
    </form>
    
  )
}

