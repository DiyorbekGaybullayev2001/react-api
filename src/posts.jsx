import React, { useEffect, useState } from 'react'

const Posts = () => {

    const [posts, setPosts] = useState([])
    console.log(posts);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
          .then(response => response.json())
          .then(data => setPosts(data))
      }, [])

  return (
    <div>
          <h1>Posts</h1>
      <div className="container">
        {posts.map((user) => {
          return(
            <div className="div1">
              <div className="div2">
                <h1>User Id: {user.userId}</h1>
                <p>I D: {user.id}</p>
                <p>Title: {user.title}</p>
                <p>Body: {user.body}</p>
              </div>
            </div>
          )
        })}
      </div>
      
    </div>
  )
}

export default Posts
