import logo from './logo.svg';

import  { Addtodo }  from './components/Addtodo';
import  { Todoitem }  from './components/Todoitem';
import { useState } from 'react';

function App() { 
  
  const [todo, setTodo] = useState([])
  
  
  const getItem = (item) =>{
    setTodo((prevState)=>{
      return [...prevState, item]
    })
  }
  
  const getCompleted = (id) =>{
    setTodo((prevState)=>{
      return prevState.filter((item, index)=>{
        return index !== id;
      })
    })
  }

  
  

  return (
    <div className="todo">
    <Addtodo item={getItem} />
    {todo && todo.map((todo,index)=>(
      <Todoitem id={index}   item={todo} completed={getCompleted}/>
    ))}
    
    
    </div>

  );
}

export default App;
