import React, { useState } from 'react'

const Todo = () => {
  const [todos,setTodos]=useState(["at work","assignment"]);
  const [newTodo,setNewTodo]=useState("");

  const handleSubmit=(event)=>{
  setNewTodo(event.target.value);
  console.log(event.target.value)
  }

  const addTask=()=>{
    setTodos([...todos,newTodo]);
    setNewTodo("")

  }
//delete todo
  const deleteTodo=(index)=>{
    setTodos(todos.filter((_, idx) => idx !== index));
   
  }


  return (
    <>
      <input style={{padding:"8px"}} type='text' value={newTodo} placeholder='add task' onChange={handleSubmit}/><br/><br/>
      <button onClick={addTask} >Add forTask</button>
      {
        todos.map((todo,idx)=>(
          <h3 key={idx}>{idx+1}. {todo}  <button onClick={()=>deleteTodo(idx)} style={{padding:"5px 10px 5px 10px", marginLeft:"10px",color:"red" }}>Delete</button></h3>
        ))
      }
    </>
  )
}

export default Todo

