import React, { useEffect, useState } from 'react'

const Comments = () => {

    let [comments, setcomments] = useState([])
    console.log(comments);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/comments')
          .then(response => response.json())
          .then(data => setcomments(data))
      }, [])


  return (
    <div>
         <h1>Comments</h1>
      <div className="container">
        {comments.map((user) => {
          return(
            <div className="div1">
              <div className="div2">
                <h1>Post Id: {user.postId}</h1>
                <p>I D: {user.id}</p>
                <p>Name: {user.name}</p>
                <p>Email: {user.email}</p>
                <p>Body: {user.body}</p>
              </div>
            </div>
          )
        })}
      </div>
      
      
    </div>
  )
}

export default Comments
