import React from 'react'

export const Todoitem = (props) => {
  return (
    <div className='todo-item'>
        <input type="checkbox" onChange={()=>props.completed(props.id)}/>
        <p> {props.item}</p>
    </div>
  )
}
