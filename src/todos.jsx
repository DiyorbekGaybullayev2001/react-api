import React from 'react'
import { useEffect, useState } from 'react';

const Todos = () => {

    const [todos, settodos] = useState([])
    console.log(todos);
    useEffect(()=>{
      fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(data => settodos(data))
    }, [])

  return (
    <>
        <div>
            <h1>Todos</h1>
            <div className="container">
            {todos.map((user) => {

           return(
            <div className="div1">
              <div className="div2">
                <p>I D: {user.id}</p>
                <h1>User Id: {user.userId}</h1>
                <p>Title: {user.title}</p>
                <p>Completed: {user.completed}</p>
              </div>
            </div>
          )
        })}
      </div>



        </div>
    </>
  )
}

export default Todos
